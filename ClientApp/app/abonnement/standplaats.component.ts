import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { AuthService, Privilege } from '../auth';
import { ValidatorService } from '../componenten/validators';
import {
  AbonnementService,
  IKavelIdentifierDto,
  IKavelOpmerking,
  IMarktboekjeKavelDetailDto,
  KavelService,
  KavelStatusEnum,
  ProductService,
} from '../services';

@Component({
  providers: [ProductService],
  selector: 'mafo-standplaats',
  templateUrl: './html/standplaats.component.html',
  styleUrls: ['./html/standplaats.component.scss'],
})
export class StandplaatsComponent implements OnInit {
  @Input() data: any;
  private edit: boolean = false;
  private lessKavels: boolean = false;
  private bezetTeBedelenKavels: boolean = false;
  private allBezetTeBedelenKavels: boolean = false;
  private uitstallingen: any;
  private verkoop: any;
  private errorMessage: any;
  private standplaatsForm: FormGroup;
  private canUpdate: Observable<boolean>;
  kavelConfirmDisplayed = false;
  private kavels: IKavelIdentifierDto[];
  detailDisplayed = false;
  kavel: IMarktboekjeKavelDetailDto;
  mogelijkeData: Date[];
  selectedKavels: number[];
  eerstVolgendeKwartaalDatum = new Date().eerstVolgendeKwartaalEindDatum(true);
  kavelStatusEnum = KavelStatusEnum;
  kavelOpmerking: IKavelOpmerking;
  opmerking: string;
  currentDate = new Date();

  constructor(
    private fb: FormBuilder,
    private modal: Modal,
    private productService: ProductService,
    private kavelService: KavelService,
    private toastr: ToastrService,
    private abonnementSvc: AbonnementService,
    private validatorSvc: ValidatorService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getKavels();
    this.buildForm();
    this.security();
    this.mogelijkeData = new Array<Date>();
    this.selectedKavels = new Array<number>();
    this.enableControl(
      'kavelDatum',
      new Date().eerstVolgendeKwartaalEindDatum(true)
    );
    this.disableDates();
  }

  private buildForm(): void {
    this.standplaatsForm = this.fb.group({
      begindatum: [this.data.beginDatum, [Validators.required]],
      einddatum: [this.data.eindDatum],
      uitstallingCode: [this.data.uitstalling.code, [Validators.required]],
      verkoopCode: [this.data.verkoop.code, [Validators.required]],
      producten: this.fb.array([]),
      kavelDatum: new Date().eerstVolgendeKwartaalEindDatum(true),
    });
  }

  bewaren() {
    var status = this.data.abonnementStatus;
    if (
      this.standplaatsForm
        .get('producten')
        .value.some((x) => x.isHoofdcategorie)
    ) {
      if (status.code == 'LOPEND' || status.code == 'OPGESCHORT') {
        var returnValue = this.standplaatsForm.value;
        returnValue.selectedKavels = this.selectedKavels;

        const ctrl = this.standplaatsForm.get('kavelDatum');
        var kavelDatum = new Date(ctrl.value);
        var offset = kavelDatum.getTimezoneOffset() * 60000;
        var localISOTime = new Date(ctrl.value - offset)
          .toISOString()
          .slice(0, -1);
        returnValue.kavelDatum = localISOTime;
        if (kavelDatum < new Date().addDays(30)) {
          this.modal
            .confirm()
            .title('Kavel datum')
            .message(
              'De door u gekozen startdatum ligt op minder dan 30 kalenderdagen van vandaag. Wenst u hiermee verder te gaan?'
            )
            .cancelBtn('Annuleren')
            .okBtn('Bevestig')
            .open()
            .result.catch() // catch error not related to the result (modal open...)
            .then((dialog) => dialog.result) // dialog has more properties,lets just return the promise for a result.
            .then((x) => {
              if (!this.standplaatsForm.valid) {
                this.validatorSvc.valideFormGroup(this.standplaatsForm);
                return;
              }
              this.abonnementSvc.post(this.data.id, returnValue).subscribe(
                (x) => {
                  const value = this.standplaatsForm.value;
                  this.data.begindatum = value.begindatum;
                  this.data.einddatum = value.einddatum;
                  this.data.uitstalling.code = value.uitstallingCode;
                  this.data.verkoop.code = value.verkoopCode;
                  this.data.producten = value.producten;
                  this.getKavels();
                  this.toastr.success('Standplaats bewaard.', 'Standplaats');
                  this.edit = false;
                },
                (x) => {
                  this.toastr.error(
                    'Kon standplaats niet bewaren.',
                    'Standplaats'
                  );
                  if (x.ExtraInfo) {
                    for (let xtra in x.ExtraInfo) {
                      this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                    }
                  }
                }
              );
            }) // if were here ok was clicked.
            .catch((x) => {}); // if were here cancel was clicked.
        } else {
          if (!this.standplaatsForm.valid) {
            this.validatorSvc.valideFormGroup(this.standplaatsForm);
            return;
          }
          this.abonnementSvc.post(this.data.id, returnValue).subscribe(
            (x) => {
              const value = this.standplaatsForm.value;
              this.data.begindatum = value.begindatum;
              this.data.einddatum = value.einddatum;
              this.data.uitstalling.code = value.uitstallingCode;
              this.data.verkoop.code = value.verkoopCode;
              this.data.producten = value.producten;
              this.getKavels();
              this.toastr.success('Standplaats bewaard.', 'Standplaats');
              this.edit = false;
              this.lessKavels = false;
            },
            (x) => {
              this.toastr.error('Kon standplaats niet bewaren.', 'Standplaats');
              if (x.ExtraInfo) {
                for (let xtra in x.ExtraInfo) {
                  this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                }
              }
            }
          );
        }
      } else {
        this.toastr.error(
          'Deze actie is niet mogelijk op een abonnement met status ' +
            status.omschrijving,
          'Kavels verminderen'
        );
      }
    } else {
      this.toastr.error('Er is geen hoofdproduct aangeduid', 'Producten');
    }
  }

  updateKavelOpmerking($event) {
    $event.preventDefault();
    $event.stopImmediatePropagation();

    this.kavelOpmerking = {
      kavelId: this.kavel.kavelId,
      marktId: this.kavel.marktId,
      opmerking: this.opmerking,
    };

    if (this.kavel.opmerkingen == undefined) {
      this.kavel.opmerkingen = [];
    }
    this.kavel.opmerkingen.push(this.kavelOpmerking);

    this.kavelService.save(this.kavel).subscribe(
      (x) => {
        this.opmerking = '';
        this.toastr.success('opmerking succesvol opgeslagen.');
      },
      (x) => {
        this.toastr.error('opmerking kon niet worden bewaard.');
        this.kavel.opmerkingen.pop();
      }
    );
  }

  selectedKavelsLeegmaken(): void {
    this.selectedKavels = [];
  }

  security(): void {
    this.canUpdate = this.auth.hasPermission(Privilege.Abonnement.Update);
  }

  getKavels(): void {
    this.kavelService
      .getAllKavelsForAbonnement(this.data.markt.Id, this.data.id)
      .subscribe(
        (kavels) => {
          this.kavels = kavels;
          this.checkBezetTeBedelen();
        },
        (error) => {
          this.errorMessage = <any>error;
        }
      );
  }

  checkBezetTeBedelen(): void {
    var aantalBezetTeBedelen = 0;
    this.bezetTeBedelenKavels = false;
    this.allBezetTeBedelenKavels = false;
    for (let i = 0; i < this.kavels.length; i++) {
      if (this.kavels[i].kavelStatus === KavelStatusEnum.BezetTeBedelen) {
        this.bezetTeBedelenKavels = true;
        aantalBezetTeBedelen++;
      }
    }
    if (aantalBezetTeBedelen === this.kavels.length) {
      this.allBezetTeBedelenKavels = true;
    }
  }

  mousedown($event): void {
    $event.preventDefault();
    $event.stopImmediatePropagation();
    setTimeout(() => {
      var link: Element = $event.target.closest('a');
      if (!link) return;

      var kavelId = Number(link.getAttribute('data-id'));

      this.kavelService
        .getKavelDetail(this.data.markt.id, kavelId)
        .subscribe((x) => {
          this.kavel = x;
          this.detailDisplayed = true;
        });
    }, 300);
  }
  selectKavel($event): void {
    $event.preventDefault();
    var link: Element = $event.target.closest('a');
    if (!link) return;
    var kavelId = Number(link.getAttribute('data-id'));

    if (this.selectedKavels.indexOf(kavelId) != -1) {
      this.selectedKavels.splice(this.selectedKavels.indexOf(kavelId), 1);
      var span: Element = $event.target.closest('span');
      span.className = 'badge large bg-gray';
    } else {
      var span: Element = $event.target.closest('span');
      span.className = 'badge large bg-blue';
      //this.kavels.filter(function (x) { return x.id == kavelId })[0].kavelStatus.code = "SELECTED";
      this.selectedKavels.push(kavelId);
    }
  }
  hideDetail(): void {
    this.detailDisplayed = false;
    this.kavelConfirmDisplayed = false;
  }

  OpenPanelsStandplaats(): void {
    var linkProducten = document.getElementsByName('producten');
    var panelProducten = document.getElementById('producten');

    if (
      linkProducten &&
      linkProducten[0] &&
      !panelProducten.classList.contains('in')
    ) {
      linkProducten[0].click();
    }

    var linkKavels = document.getElementsByName('kavels');
    var panelKavels = document.getElementById('kavels');

    if (linkKavels && linkKavels[0] && !panelKavels.classList.contains('in')) {
      linkKavels[0].click();
    }
  }

  setKavelColor(kavel: IKavelIdentifierDto): any {
    return {
      //'bg-blue': kavel.kavelStatus === "SELECTED",
      'bg-green': kavel.kavelStatus === KavelStatusEnum.Vrij,
      'bg-red':
        kavel.kavelStatus === KavelStatusEnum.Bezet ||
        kavel.kavelStatus === KavelStatusEnum.InOverdracht,
      'bg-orange': kavel.kavelStatus === KavelStatusEnum.Gereserveerd,
      'badge-border': kavel.mogelijkheidDieptekavel,
      'bg-orange-striped':
        kavel.kavelStatus === KavelStatusEnum.BezetGereserveerd,
      'bg-green-striped': kavel.kavelStatus === KavelStatusEnum.BezetTeBedelen,
    };
  }
  cancelScaleDown(): void {
    if (
      this.kavels.some(
        (x) =>
          x.kavelStatus.toString().lastIndexOf('BEZET') !== 0 ||
          x.kavelStatus == KavelStatusEnum.BezetGereserveerd
      )
    ) {
      this.modal
        .alert()
        .title('Inkrimping annuleren')
        .message(
          'Deze kavels hebben een andere bestemming gekregen. Het ongedaan maken van deze inkrimping kan niet verdergezet worden.'
        )
        .okBtn('Ok')
        .open()
        .result.catch(); // catch error not related to the result (modal open...)
    } else if (
      this.kavels.every(
        (x) =>
          x.kavelStatus == KavelStatusEnum.Bezet ||
          x.kavelStatus == KavelStatusEnum.BezetTeBedelen
      )
    ) {
      var returnValue = this.standplaatsForm.value;
      returnValue.selectedKavels = this.kavels.map((x) => x.id);
      returnValue.inkrimpingAnnulatie = true;
      this.selectedKavels;
      this.modal
        .confirm()
        .title('Inkrimping annuleren')
        .message(
          'Wenst u de gemaakte inkrimping te annuleren? Hierdoor zullen alle kavels terug de status ‘bezet’ bezet krijgen.'
        )
        .cancelBtn('Annuleren')
        .okBtn('Bevestig')
        .open()
        .result.catch() // catch error not related to the result (modal open...)
        .then((dialog) => dialog.result) // dialog has more properties,lets just return the promise for a result.
        .then((x) => {
          this.abonnementSvc.post(this.data.id, returnValue).subscribe(
            (x) => {
              const value = this.standplaatsForm.value;
              this.data.begindatum = value.begindatum;
              this.data.einddatum = value.einddatum;
              this.data.uitstalling.code = value.uitstallingCode;
              this.data.verkoop.code = value.verkoopCode;
              this.data.producten = value.producten;
              this.getKavels();
              this.toastr.success('Inkrimping geannuleerd.', 'Inkrimpen');
              this.lessKavels = false;
            },
            (x) => {
              this.toastr.error('Kon annulering niet bewaren.', 'Inkrimpen');
              if (x.ExtraInfo) {
                for (let xtra in x.ExtraInfo) {
                  this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
                }
              }
            }
          );
        }) // if were here ok was clicked.
        .catch((x) => {}); // if were here cancel was clicked.
    }
  }

  toDisplayFormat(status: KavelStatusEnum): string {
    switch (status) {
      case KavelStatusEnum.BezetGereserveerd:
        return 'Bezet gereserveerd';
      case KavelStatusEnum.BezetTeBedelen:
        return 'Bezet te bedelen';
      case KavelStatusEnum.InOverdracht:
        return 'In overdracht';
      default:
        return KavelStatusEnum[status];
    }
  }

  private enableControl(name: string, defaultValue: any) {
    const ctrl = this.standplaatsForm.get(name);
    if (ctrl) {
      ctrl.enable();
      ctrl.reset();
      ctrl.setValue(defaultValue);
      ctrl.markAsPristine({ onlySelf: true });
    }
  }
  private disableDates() {
    this.mogelijkeData = new Array<Date>();
    new Date().endDates(5).forEach(function (item) {
      this.mogelijkeData.push(item);
    }, this);
  }
}
