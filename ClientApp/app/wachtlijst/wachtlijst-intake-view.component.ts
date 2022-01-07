import 'rxjs/add/operator/share';

import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService, Privilege } from '../auth';
import { IGridOptions } from '../componenten/datagrid';
import { ValidatorService } from '../componenten/validators';
import { ApplicationConstants, IPagedResult, IQueryParameters } from '../core';
import {
  AbonnementService,
  IKavelIdentifierDto,
  KavelService,
} from '../services';
import {
  AanvraagWeigeringService,
  IWeigeringsTermijn,
} from '../services/aanvraag-weigering.service';
import { KavelStatusEnum } from '../services/kavel';

@Component({
  templateUrl: './html/wachtlijst-intake-view.component.html',
  styles: [
    '.badge, .kavel-detail { cursor: pointer; text-decoration: none;}',
    `
      .ajax-loading {
        background-color: #ffffff;
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzY0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYzLjM2MjgxNzk4NjY2OTI2IDg3Ljk2NDU5NDMwMDUxNDIiIHN0cm9rZT0iI2QyNTM1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwOyIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L3N2Zz4=);
        background-size: 50px 50px;
        background-position: center;
        background-repeat: no-repeat;
      }
    `,
  ],
})
export class WachtlijstIntakeViewComponent {
  private aanvraagStatus = ApplicationConstants.AanvraagStatus;

  intake: any;
  aanvraagMarkten: any;
  registratie: boolean = false;
  reservatie: boolean = false;
  preregistratie: boolean = false;
  stopgezet: boolean = false;
  geannuleerd: boolean = false;
  status: string;
  data: any;
  pageTitle: string;
  hoofdcontactPersoon: any;
  routerlink: string;
  updateAanvraag: Observable<boolean>;
  availableKavels: number;
  deleted: boolean = false;
  toegewezen: boolean = false;
  kavelsLoading: boolean = false;
  kavelsToewijzenEdit: boolean = false;
  assigningKavelsLoading: boolean = false;
  toewijzenAanvragenNietInAanmerking: Observable<boolean>;

  constructor(
    private toastr: ToastrService,
    private modal: Modal,
    private router: Router,
    private kavelService: KavelService,
    private abonnementService: AbonnementService,
    private validatorSvc: ValidatorService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private aanvraagWeigeringService: AanvraagWeigeringService,
    private datePipe: DatePipe,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.intake = data['aanvraag'] || {};
      this.aanvraagMarkten = this.intake.aanvraagMarkten;
      if (this.intake.deletedOn != null) {
        this.deleted = true;
      }
      this.onload();
    });
    this.security();
  }

  onload(): void {
    this.setLabels();
    if (this.preregistratie) {
      this.routerlink =
        '/wachtlijst/preregistratie/' + this.intake.id + '/edit';
    } else if (this.registratie) {
      this.routerlink = '/wachtlijst/registratie/' + this.intake.id + '/edit';
    } else if (this.reservatie) {
      this.routerlink = '/wachtlijst/reservatie/' + this.intake.id + '/edit';
    } else {
      this.routerlink = '/wachtlijst/intake/' + this.intake.id + '/edit';
    }
  }

  setLabels(): void {
    // set status label
    if (
      this.intake.statusCode ===
      ApplicationConstants.AanvraagStatus.Gereserveerd
    ) {
      this.reservatie = true;
      this.status = ApplicationConstants.AanvraagStatus.Gereserveerd;
    } else {
      this.status = ApplicationConstants.AanvraagStatus.Geregistreerd;
    }

    if (this.intake.statusCode === ApplicationConstants.AanvraagStatus.Intake) {
      this.status = ApplicationConstants.AanvraagStatus.Intake;
    }

    if (
      this.intake.statusCode ===
      ApplicationConstants.AanvraagStatus.Gepreregistreerd
    ) {
      this.preregistratie = true;
      this.status = ApplicationConstants.AanvraagStatus.Gepreregistreerd;
    }

    if (
      this.intake.statusCode ===
      ApplicationConstants.AanvraagStatus.Geregistreerd
    ) {
      this.registratie = true;
      this.status = ApplicationConstants.AanvraagStatus.Geregistreerd;
    }

    if (
      this.intake.statusCode === ApplicationConstants.AanvraagStatus.Stopgezet
    ) {
      this.stopgezet = true;
      this.status = ApplicationConstants.AanvraagStatus.Stopgezet;
    }

    if (
      this.intake.statusCode === ApplicationConstants.AanvraagStatus.Geannuleerd
    ) {
      this.geannuleerd = true;
      this.status = ApplicationConstants.AanvraagStatus.Geannuleerd;
    }

    // set button label
    this.pageTitle = `${this.intake.klant.firmanaam} > ${
      this.intake.statusCode
    } ${this.datePipe.transform(this.intake.datum, 'dd/MM/yyyy')}`;
  }

  showKavel(aanvraagMarkt) {
    aanvraagMarkt.kavels = [];
    this.kavelsToewijzenEdit = true;
    this.kavelObservables = [];
    this.kavelsLoading = true;
    this.fetchKavels(aanvraagMarkt.marktId);
  }

  kavelObservables = new Array<IKavelIdentifierDto>();

  fetchKavels(marktId: number): void {
    this.kavelService.getAllKavelsForMarktOverview(marktId).subscribe((x) => {
      this.kavelObservables = x;
      this.kavelsLoading = false;
    });
    this.kavelService.getAvailableAmount(marktId).subscribe((x) => {
      this.availableKavels = x.valueOf();
    });
  }

  selectKavel($event: Event, aanvraagMarkt: any, kavel: IKavelIdentifierDto) {
    $event.preventDefault();
    $event.stopPropagation();

    if (
      kavel.kavelStatus === KavelStatusEnum.Bezet ||
      kavel.kavelStatus === KavelStatusEnum.BezetGereserveerd ||
      kavel.kavelStatus === KavelStatusEnum.Gereserveerd
    )
      return;
    const index = aanvraagMarkt.kavels.indexOf(kavel.id);
    if (index > -1) {
      kavel.selected = false;
      this.availableKavels++;
      aanvraagMarkt.kavels.splice(index, 1);
    } else if (this.availableKavels == 0) {
      kavel.selected = false;
      this.toastr.error(
        'Er moeten 5% kavels vrij gehouden worden',
        'Kavels niet beschikbaar'
      );
    } else {
      if (aanvraagMarkt.aantalKavels === aanvraagMarkt.kavels.length) {
        this.toastr.warning(
          'Er kunnen geen kavels meer gekozen worden omdat het maximum aantal bereikt is',
          'Kavels'
        );
        return;
      }
      kavel.selected = true;
      this.availableKavels--;
      aanvraagMarkt.kavels.push(kavel.id);
    }
  }

  cancelSelectKavels(aanvraagMarkt) {
    delete aanvraagMarkt.kavels;
    this.kavelsToewijzenEdit = false;
  }

  kavelsToewijzen(aanvraagMarkt) {
    if (this.aanvraagMarkten.length < 0) {
      this.toastr.error(
        'Er is geen markt gekoppeld aan deze aanvraag',
        'Markt'
      );
      return;
    }
    const markt = this.aanvraagMarkten[0];
    if (!markt.kavels || markt.kavels.length < 0) {
      this.toastr.error(
        'Er zijn geen kavels aangeduid op de markt van deze aanvraag',
        'Kavels'
      );
      return;
    }
    if (markt.aantalKavels > markt.kavels.length) {
      this.toastr.error(
        'Er zijn niet voldoende kavels aangeduid op deze aanvraag',
        'Kavels'
      );
      return;
    }

    this.assigningKavelsLoading = true;
    this.abonnementService
      .create({
        aanvraagId: this.intake.id,
        kavels: markt.kavels,
      })
      .subscribe(
        (x) => {
          this.toegewezen = true;
          delete aanvraagMarkt.kavels;
          this.assigningKavelsLoading = false;
          this.toastr.info('Kavel(s) zijn toegewezen', 'Kavels');
          this.router.navigate(['abonnement', x.id]);
          this.kavelsToewijzenEdit = false;
        },
        (x) => {
          this.toastr.error('Kon de kavel(s) niet toewijzen', 'Kavels');
          this.assigningKavelsLoading = false;
          if (x.ExtraInfo) {
            for (let xtra in x.ExtraInfo) {
              this.toastr.warning(x.ExtraInfo[xtra].join(','), xtra);
            }
          }
        }
      );
  }

  setKavelColor(kavel: IKavelIdentifierDto): any {
    if (kavel.selected)
      return {
        'bg-blue': true,
      };
    else
      return {
        'bg-green': kavel.kavelStatus === KavelStatusEnum.Vrij,
        'bg-red':
          kavel.kavelStatus === KavelStatusEnum.Bezet ||
          kavel.kavelStatus === KavelStatusEnum.InOverdracht,
        'bg-orange': kavel.kavelStatus === KavelStatusEnum.Gereserveerd,
        'bg-orange-striped':
          kavel.kavelStatus === KavelStatusEnum.BezetGereserveerd,
        'bg-green-striped':
          kavel.kavelStatus === KavelStatusEnum.BezetTeBedelen,
      };
  }

  security(): void {
    this.updateAanvraag = this.auth.hasPermission(Privilege.Aanvraag.Update);
    this.toewijzenAanvragenNietInAanmerking = this.auth.hasPermission(
      Privilege.Aanvraag.ToewijzenAanvragenNietInAanmerking
    );
  }

  dataWeigering: IPagedResult<any>;

  gridWeigeringOptions: IGridOptions = {
    stripedRows: true,
    showPaging: false,
    fields: [
      {
        field: '',
        title: 'Termijn',
        width: '15%',
      },
      {
        field: 'startDatum',
        title: 'Startdatum',
        width: '15%',
      },
      {
        field: 'weigeringsDatum',
        title: 'Datum Weigering',
        width: '20%',
      },
      {
        field: 'motivatie',
        title: 'Motivatie',
        width: '25%',
      },
    ],
  };

  fetchWeigeringData(page: IQueryParameters): void {
    this.aanvraagWeigeringService.getAll(this.intake.id).subscribe(
      (x: IPagedResult<IWeigeringsTermijn>) => {
        this.dataWeigering = x;
        this.kanWeigeringStarten =
          x.embedded.resourceList.findIndex((x) => !x.weigeringsDatum) === -1;
      },
      (x) =>
        this.toastr.error('Kon de Weigeringstermijnen niet inladen', 'Termijn')
    );
  }

  startWeigeringendisplay = false;
  sluitWeigeringAfDisplay = false;
  kanWeigeringStarten = false;

  weigeringForm: FormGroup;

  startWeigeringen(): void {
    this.weigeringForm = this.fb.group({
      startDatum: [new Date(Date.now()), [Validators.required]],
      eindDatum: [
        {
          value: new Date(Date.now()).addMonths(1).addDays(-1),
          disabled: true,
        },
      ],
    });
    this.startWeigeringendisplay = true;
  }

  afsluitenWeigering(id: number): void {
    this.weigeringForm = this.fb.group({
      id: [id],
      weigeringsDatum: [new Date(Date.now()), [Validators.required]],
      motivatie: [''],
    });
    this.sluitWeigeringAfDisplay = true;
  }

  annuleerWeigeringsTermijn(id: number): void {
    this.modal
      .confirm()
      .title('Weigeringstermijn annuleren')
      .body('Bent u zeker dat u deze weigeringstermijn wenst te annuleren?')
      .okBtn('Bevestigen')
      .cancelBtn('Annuleren')
      .open()
      .result.catch() // catch error not related to the result (modal open...)
      .then((dialog) => dialog.result) // dialog has more properties,lets just return the promise for a result.
      .then((x) => {
        this.weigeringAnnuleren({
          id: id,
          weigeringsDatum: new Date(Date.now()),
          negeerRegistratie: true,
        });
      }) // if were here ok was clicked.
      .catch((x) => {}); // if were here cancel was clicked.
  }

  cancelWeigering(): void {
    this.startWeigeringendisplay = false;
    this.sluitWeigeringAfDisplay = false;
    this.weigeringForm = null;
  }

  submitWeigering($event) {
    if (!this.weigeringForm.valid) {
      this.validatorSvc.valideFormGroup(this.weigeringForm);
      return;
    }
    if (this.startWeigeringendisplay) {
      this.modal
        .confirm()
        .title('Weigeringstermijn starten')
        .body(
          'Bent u zeker dat u de weigeringstermijn wenst te starten op de gekozen datum?'
        )
        .okBtn('Bevestigen')
        .cancelBtn('Annuleren')
        .open()
        .result.catch() // catch error not related to the result (modal open...)
        .then((dialog) => dialog.result) // dialog has more properties,lets just return the promise for a result.
        .then((x) => {
          this.aanvraagWeigeringService
            .starten(this.intake.id, this.weigeringForm.value)
            .pipe(
              tap((b) => {
                this.weigeringForm = null;
                this.startWeigeringendisplay = false;
              })
            )
            .subscribe(
              (b) => {
                this.toastr.success('Weigeringstermijn is gestart', 'Termijn');
              },
              (b) => {
                this.toastr.error(
                  'Kon de Weigeringstermijn niet starten',
                  'Termijn'
                );
                if (b.ExtraInfo) {
                  for (let xtra in b.ExtraInfo) {
                    this.toastr.warning(b.ExtraInfo[xtra].join(','), xtra);
                  }
                }
              }
            );
        }) // if were here ok was clicked.
        .catch((x) => {}); // if were here cancel was clicked.
    }
    if (this.sluitWeigeringAfDisplay) {
      this.modal
        .confirm()
        .title('Aanvraagweigering registreren')
        .body('Wilt u deze weigering van de aanvraag registreren?')
        .okBtn('Bevestigen')
        .cancelBtn('Annuleren')
        .open()
        .result.catch() // catch error not related to the result (modal open...)
        .then((dialog) => dialog.result) // dialog has more properties,lets just return the promise for a result.
        .then((x) => {
          this.weigeringRegistreren(this.weigeringForm.value);
        }) // if were here ok was clicked.
        .catch((x) => {}); // if were here cancel was clicked.
    }
  }

  weigeringAnnuleren(data: any): void {
    this.aanvraagWeigeringService
      .registreren(this.intake.id, data)
      .pipe(
        tap((x) => {
          this.fetchWeigeringData(null);
        })
      )
      .subscribe(
        (x) => {
          this.toastr.success(
            'Weigeringstermijn is geannuleerd',
            'Weigeringstermijn'
          );
        },
        (x) => {
          this.toastr.error(
            'Kon de weigeringstermijn niet annuleren',
            'Weigeringstermijn'
          );
          if (x.ExtraInfo) {
            for (let xtra in x.ExtraInfo) {
              this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
            }
          }
        }
      );
  }

  weigeringRegistreren(data: any): void {
    this.aanvraagWeigeringService
      .registreren(this.intake.id, data)
      .pipe(
        tap((x) => {
          this.weigeringForm = null;
          this.sluitWeigeringAfDisplay = false;
        })
      )
      .subscribe(
        (x: IWeigeringsTermijn) => {
          this.toastr.success('Weigeringen is geregistreerd', 'Weigering');
          location.replace('/wachtlijst/registratie/' + this.intake.id);
        },
        (x) => {
          this.toastr.error('Kon de weigering niet registreren', 'Weigering');
          if (x.ExtraInfo) {
            for (let xtra in x.ExtraInfo) {
              this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
            }
          }
        }
      );
  }

  private displayErrors(x: any) {
    if (x.ExtraInfo) {
      for (let xtra in x.ExtraInfo) {
        this.toastr.warning(x.ExtraInfo[xtra].join(','), xtra);
      }
    }
  }
  changeDate($event) {
    this.weigeringForm.controls['eindDatum'].patchValue(
      $event.addMonths(1).addDays(-1)
    );
  }
}
