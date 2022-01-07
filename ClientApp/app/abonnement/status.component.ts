import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService, Privilege } from '../auth';
import { CodeSelectComponent, ICode } from '../componenten/code-select';
import { ValidatorService } from '../componenten/validators';
import { ApplicationConstants } from '../core';
import {
  AbonnementService,
  IKavelIdentifierDto,
  KavelService,
  KavelStatusEnum,
} from '../services';
import { IMessageEnrichedModel } from '../services/MessageEnrichedModel';

interface ICodeData {
  data: ICode[];
}

@Component({
  selector: 'mafo-status',
  templateUrl: './html/status.component.html',
  styles: [
    `
      .right-slider {
        border-left: 2px solid #e5e5e5;
        position: fixed;
        min-height: 100%;
        /*overflow: hidden;*/
        overflow-y: scroll;
        background-color: #f3f3f3;
        top: 0;
        padding-top: 70px;
        -ms-opacity: 0;
        opacity: 0;
        -ms-transition: right 0.5s cubic-bezier(0, 1, 0.5, 1),
          opacity 0.3s cubic-bezier(0, 1, 0.5, 1);
        -o-transition: right 0.5s cubic-bezier(0, 1, 0.5, 1),
          opacity 0.3s cubic-bezier(0, 1, 0.5, 1);
        -webkit-transition: right 0.5s cubic-bezier(0, 1, 0.5, 1),
          opacity 0.3s cubic-bezier(0, 1, 0.5, 1);
        transition: right 0.5s cubic-bezier(0, 1, 0.5, 1),
          opacity 0.3s cubic-bezier(0, 1, 0.5, 1);
      }
      a.kavel-detail {
        text-decoration: none;
      }

      .right-slider.slide {
        right: 0 !important;
        opacity: 1 !important;
      }

      /*Detail*/
      #klant-detail {
        width: 100%;
        right: -100%;
        z-index: 12;
      }

      #klant-detail.slide {
        border-left: 0;
      }

      @media (min-width: 768px) {
        #klant-detail.slide {
          left: 220px;
          padding-right: 240px;
        }
      }
    `,
  ],
})
export class StatusComponent implements OnInit {
  @Input() data: any;
  private;
  @Output()
  @ViewChild('aardSelector', { static: false })
  aardSelector: CodeSelectComponent;
  @ViewChild('redenSelector', { static: false })
  redenSelector: CodeSelectComponent;
  mogelijkeEindData: Date[];
  canUpdate: Observable<boolean>;
  private kavels: IKavelIdentifierDto[];

  get heeftReden() {
    return this.statusForm.get('reden').enabled;
  }

  get heeftAard() {
    return this.statusForm.get('aard').enabled;
  }

  statusForm: FormGroup;
  edit: boolean = false;
  status: string = '';
  aard: string = '';
  reden: string = '';
  today = new Date(Date.now());
  origineleBegindatum: Date;
  isHistory: boolean = false;
  eerstVolgendeKwartaalEindDatum = new Date().eerstVolgendeKwartaalEindDatum();

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private abonnementSvc: AbonnementService,
    private kavelService: KavelService,
    private validationSvc: ValidatorService,
    private modal: Modal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.statusForm = this.fb.group({
      status: this.fb.control('', [Validators.required]),
      aard: this.fb.control({ value: '', disabled: true }, [
        Validators.required,
      ]),
      reden: this.fb.control({ value: '', disabled: true }, [
        Validators.required,
      ]),
      opmerkingen: this.fb.control(''),
      beginDatum: this.fb.control({ value: new Date(), disabled: true }, [
        Validators.required,
      ]),
      eindDatum: this.fb.control({ value: new Date(), disabled: true }, [
        Validators.required,
      ]),
      ondernemingsnummerOvernemer: this.fb.control(
        { value: '', disabled: true },
        [Validators.required]
      ),
      eindDatumHuidigAbonnenemt: this.fb.control(
        { value: new Date(), disabled: true },
        [Validators.required]
      ),
      ontvangstAanvraagOpschortingDatum: this.fb.control(
        { value: new Date(), disabled: true },
        [Validators.required]
      ),
      eindDatumAbonnement: this.fb.control(
        { value: new Date(), disabled: true },
        [Validators.required]
      ),
      briefBetekeningOpzegDatum: this.fb.control(
        { value: new Date(), disabled: true },
        [Validators.required]
      ),
      datumOntvangstOpzeg: this.fb.control(
        { value: new Date(), disabled: true },
        [Validators.required]
      ),
    });
    this.origineleBegindatum = this.data.abonnementStatusBeginDatum;
    this.security();
    this.mogelijkeEindData = new Array<Date>();
  }

  private resetFormGroup() {
    const excludes = ['status', 'aard', 'reden', 'opmerkingen'];
    for (let ctrlName in this.statusForm.controls) {
      if (excludes.includes(ctrlName)) {
        if (ctrlName === 'status') continue;
        if (ctrlName === 'opmerkingen')
          this.statusForm.get(ctrlName).setValue('');
      } else {
        const control = this.statusForm.get(ctrlName);
        control.disable();
        control.reset();
        control.markAsPristine({ onlySelf: true });
      }
    }
    this.files = {};
    this.onderneming = null;
  }

  private nieuwKlantCreatie = false;
  private onderneming: any;
  private ondernemingFound($event: IMessageEnrichedModel<any>) {
    if (!$event.data || $event.data.id <= 0) {
      this.modal
        .confirm()
        .title('Creatie nieuwe klant')
        .message(
          'Wil u een nieuwe klant aanmaken als overnemer van dit abonnement?'
        )
        .cancelBtn('Annuleren')
        .okBtn('Bevestig')
        .open()
        .result.catch() // catch error not related to the result (modal open...)
        .then((dialog) => dialog.result) // dialog has more properties,lets just return the promise for a result.
        .then((x) => {
          this.onderneming = {
            ondernemingsnr: this.statusForm.get('ondernemingsnummerOvernemer')
              .value,
          };
          this.nieuwKlantCreatie = true;
        }) // if were here ok was clicked.
        .catch((x) => (this.nieuwKlantCreatie = false)); // if were here cancel was clicked.
    } else this.klantCreated($event.data);
  }

  klantCreated($event: any) {
    this.statusForm.patchValue({
      ondernemingsnummerOvernemer: $event.ondernemingsnr,
    });
    this.onderneming = $event;
    this.nieuwKlantCreatie = false;
  }

  private beginDatumChange($event: Date) {
    if (!$event) return;
    let date: Date = $event;
    switch (this.status.toUpperCase()) {
      case 'GESCHORST':
      case 'OPGESCHORT':
        date = $event.addMonths(1).addDays(-1);
        if (date < this.today) {
          this.statusForm.patchValue({ einddatum: this.today });
          this.isHistory = true;
        } else {
          this.statusForm.patchValue({ eindDatum: date });
          this.isHistory = false;
        }
        break;
      case 'OPGEZEGD':
        if (this.aard && this.aard.toUpperCase() === 'NORMAAL') {
          date = $event.eerstVolgendeKwartaalEindDatum();
          this.statusForm.patchValue({ eindDatum: date });
        } else if (this.aard && this.aard.toUpperCase() === 'DIRECT') {
          this.statusForm.patchValue({ eindDatum: date });
        }
        break;
      default:
    }
  }

  private configureStatus(value: any): void {
    if (!value) return;
    this.status = '';
    this.resetFormGroup();

    switch (value.toUpperCase()) {
      case 'GESCHORST':
        this.enableControl('beginDatum', new Date());
        this.enableControl('eindDatum', new Date());
        this.disableControl('aard');
        this.enableControl('reden', '');
        break;
      case 'INGETROKKEN':
        this.disableControl('reden');
        this.enableControl('aard', '');
        break;
      case 'INOVERDRACHT':
        this.enableControl('ondernemingsnummerOvernemer', '');
        this.enableControl(
          'eindDatumAbonnement',
          new Date().eerstVolgendeSemesterEindDatum(true)
        );
        this.enableControl('reden', '');
        this.disableControl('aard');
        this.disableDates();
        this.getKavels();
        break;
      case 'OPGESCHORT':
        this.enableControl('reden', '');
        this.disableControl('aard');
        let startDate = new Date();
        if (this.currentStatus === 'OPGESCHORT') {
          startDate = new Date(this.data.abonnementStatusEindDatum).addDays(1);
        }
        this.enableControl('ontvangstAanvraagOpschortingDatum', startDate);
        this.enableControl('beginDatum', startDate);
        this.enableControl('eindDatum', startDate.addMonths(1));
        break;
      case 'OPGEZEGD':
        this.disableControl('reden');
        this.enableControl('aard', '');
        this.disableDates();
        break;
      case 'LOPEND':
        this.enableControl('reden', '');
        this.disableControl('aard');
        break;
    }
    this.status = value;
    if (this.redenSelector) {
      this.statusForm.patchValue({ reden: '' });
      this.redenSelector.reload();
    }
    if (this.aardSelector) {
      this.statusForm.patchValue({ aard: '' });
      this.aardSelector.reload();
    }
  }

  get currentStatus(): string {
    return this.data.abonnementStatus.code.toUpperCase();
  }

  private configureAard(value: any): void {
    console.log(this.statusForm.get('eindDatum').value);
    switch (this.status.toUpperCase()) {
      case 'INGETROKKEN':
        switch (value.toUpperCase()) {
          case 'OPENBAREWERKEN':
          case 'SANCTIE':
            this.disableControl('reden');
            this.enableControl('eindDatumAbonnement', new Date());
            break;
          case 'METOPZEG':
            this.disableControl('reden');
            this.enableControl('eindDatumAbonnement', new Date().addMonths(6));
            this.enableControl('briefBetekeningOpzegDatum', new Date());
            break;
          case 'ONGELDIGABONNEMENT':
            this.enableControl('reden', '');
            this.statusForm.get('reden').setValidators([Validators.required]);
            this.enableControl('eindDatumAbonnement', new Date());
            break;
        }
        break;
      case 'OPGEZEGD':
        switch (value.toUpperCase()) {
          case 'NORMAAL':
            this.enableControl('datumOntvangstOpzeg', new Date());
            this.enableControl(
              'eindDatum',
              new Date().eerstVolgendeKwartaalEindDatum()
            );
            this.disableControl('reden');
            this.disableDates();
            break;
          case 'DIRECT':
            this.enableControl('reden', '');
            this.enableControl('datumOntvangstOpzeg', new Date());
            this.enableControl('eindDatum', new Date());
            break;
        }
        break;
    }
    this.aard = value;
  }

  private configureReden(value: any): void {
    this.reden = value;
  }

  onBeforeRenderAard = (x: ICodeData) => {
    const filter = ['NORMAAL', 'DIRECT'];
    if (this.status.toUpperCase() === 'OPGEZEGD') {
      x.data = x.data.filter((data) =>
        filter.includes(data.code.toUpperCase())
      );
    } else {
      x.data = x.data.filter(
        (data) => !filter.includes(data.code.toUpperCase())
      );
    }
  };

  onBeforeRenderRedenen = (x: ICodeData) => {
    let filter: string[];
    switch (this.status.toUpperCase()) {
      case 'GESCHORST':
        filter = ['EVENEMENT', 'FOOR', 'OPENBAREWERKEN'];
        break;
      case 'INOVERDRACHT':
        filter = [
          'STOPZETTINGZAAKOFLEURHANDEL',
          'OVERLIJDENZAAKVOERDER',
          'ECHTSCHEIDING',
          'ANDERE',
        ];
        break;
      case 'OPGESCHORT':
        filter = [
          'ZIEKTE',
          'OVERMACHT',
          'SEIZOENSGEBONDENACTIVITEIT',
          'ONGEVAL',
        ];
        break;
      case 'OPGEZEGD':
        filter = ['ZIEKTE', 'OVERMACHT', 'OVERLIJDENZAAKVOERDER', 'ONGEVAL'];
        break;
      case 'INGETROKKEN':
        filter = [
          'FAILLISSEMENT',
          'VRIJWILLIGESTOPZETTINGZAAK',
          'ONGELDIGELEURKAART',
        ];
        break;
      case 'LOPEND':
        if (
          this.currentStatus === 'OPGESCHORT' ||
          this.currentStatus === 'INOVERDRACHT' ||
          this.currentStatus === 'INGETROKKEN' ||
          this.currentStatus === 'OPGEZEGD'
        ) {
          filter = ['OPVRAAGKLANT', 'ADMINISTRATIEVERECHTZETTING'];
          break;
        }
        if (this.currentStatus === 'GESCHORST') {
          filter = ['VOORTIJDIGBEEINDIGD', 'ADMINISTRATIEVERECHTZETTING'];
          break;
        }
      default:
        filter = [];
        break;
    }
    x.data = x.data.filter((data) => filter.includes(data.code.toUpperCase()));
  };

  onBeforeRenderStatus = (x: ICodeData) => {
    if (!x) return;
    const filter = [];
    switch (this.currentStatus) {
      case 'OPGESCHORT':
        filter.push('OPGESCHORT', 'LOPEND');
        break;
      case 'GESCHORST':
      case 'INOVERDRACHT':
      case 'INGETROKKEN':
      case 'OPGEZEGD':
        filter.push('LOPEND');
        break;
      case 'LOPEND':
        filter.push(
          'GESCHORST',
          'OPGESCHORT',
          'INOVERDRACHT',
          'INGETROKKEN',
          'OPGEZEGD'
        );
        break;
    }
    x.data = x.data.filter((data) => filter.includes(data.code.toUpperCase()));
  };

  editStatus(): void {
    this.edit = !this.edit;
    this.status = '';
    this.statusForm.reset();
    this.statusForm.markAsPristine();
  }

  security(): void {
    this.canUpdate = this.auth.hasPermission(Privilege.Abonnement.Update).pipe(
      map((x) => {
        const states = [
          ApplicationConstants.AbonnementStatus.LopendCode,
          ApplicationConstants.AbonnementStatus.GeschorstCode,
          ApplicationConstants.AbonnementStatus.OpgeschortCode,
          ApplicationConstants.AbonnementStatus.InOverdrachtCode,
          ApplicationConstants.AbonnementStatus.IngetrokkenCode,
          ApplicationConstants.AbonnementStatus.OpgezegdCode,
        ];
        return x && states.indexOf(this.data.abonnementStatus.code) >= 0;
      })
    );
  }

  save(): void {
    if (!this.statusForm.valid) {
      this.validationSvc.valideFormGroup(this.statusForm);
      this.toastr.warning(
        'Sommige velden bevatten geen geldige waarden',
        'Ongeldig formulier'
      );
      return;
    }

    if (this.status === 'INOVERDRACHT') {
      var kavelsFromForm = this.statusForm.get(
        'overTeNemenKavelIds'
      ) as FormArray;

      if (!kavelsFromForm || !kavelsFromForm.value.every((val) => val > 0)) {
        this.toastr.error(
          'Er iets misgelopen bij de kavelselectie voor de overdracht!'
        );
        return;
      }
    }

    if (!this.kavelsBeschikbaarVoorTerugLopend) {
      this.toastr.error('Eén of meerdere kavels zijn niet meer beschikbaar.');
      return;
    }

    if (this.status === 'INGETROKKEN' && this.aard === 'METOPZEG') {
      this.modal
        .confirm()
        .title('Abonnementen markt intrekken')
        .message(
          'Wilt u alle abonnementen en aanvragen van deze markt intrekken?'
        )
        .cancelBtn('Nee')
        .okBtn('Ja')
        .open()
        .result.catch() // catch error not related to the result (modal open...)
        .then((dialog) => dialog.result) // dialog has more properties,lets just return the promise for a result.
        .then((x) => {
          let value = this.statusForm.value;
          value['globaal'] = true;
          this.persist();
        })
        .catch((x) => {
          let value = this.statusForm.value;
          value['globaal'] = false;
          this.persist();
        });
    } else if (this.status === 'INGETROKKEN' && this.aard === 'SANCTIE') {
      this.modal
        .confirm()
        .title('Abonnementen klant intrekken')
        .message(
          'Wilt u alle abonnementen van deze klant op alle markten intrekken?'
        )
        .cancelBtn('Nee')
        .okBtn('Ja')
        .open()
        .result.catch() // catch error not related to the result (modal open...)
        .then((dialog) => dialog.result) // dialog has more properties,lets just return the promise for a result.
        .then((x) => {
          let value = this.statusForm.value;
          value['globaal'] = true;
          this.persist();
        })
        .catch((x) => {
          let value = this.statusForm.value;
          value['globaal'] = false;
          this.persist();
        });
    } else if (
      this.status === 'LOPEND' &&
      this.currentStatus === 'OPGESCHORT'
    ) {
      this.modal
        .confirm()
        .title('Creditnota aanmaken')
        .message(
          'Wilt u dat er een creditnota wordt aangemaakt voor de periode dat het abonnement opgeschort was?'
        )
        .cancelBtn('Nee')
        .okBtn('Ja')
        .open()
        .result.catch() // catch error not related to the result (modal open...)
        .then((dialog) => dialog.result) // dialog has more properties,lets just return the promise for a result.
        .then((x) => {
          let value = this.statusForm.value;
          value['creditnota'] = true;
          this.persist();
        })
        .catch((x) => {
          let value = this.statusForm.value;
          value['creditnota'] = false;
          this.persist();
        });
    } else if (this.isHistory) {
      this.showPersistModal();
    } else this.persist();
  }

  private persist(value?: any): void {
    const data = value || this.statusForm.value;

    if (this.status === ApplicationConstants.AbonnementStatus.LopendCode) {
      data.vorigeStatus = this.currentStatus;
    }

    if (this.currentStatus == 'OPGESCHORT' && this.status == 'OPGESCHORT') {
      data.startDatumEersteOpschorting = this.origineleBegindatum;
    }

    this.abonnementSvc
      .wijzigStatus(this.data.id, this.status, data, this.files)
      .subscribe(
        (x) => {
          this.data.abonnementStatusBeginDatum =
            data.startDatumEersteOpschorting ||
            data.beginDatum ||
            data.datumOntvangstOpzeg ||
            new Date();
          this.data.abonnementStatusEindDatum =
            data.eindDatum || data.eindDatumAbonnement || null;
          this.data.abonnementStatus.code = this.status;
          this.edit = false;
          this.toastr.success('Statuswijziging succesvol doorgevoerd');
          if (data.vorigeStatus == 'INOVERDRACHT') {
            this.modal
              .alert()
              .title('OPGELET')
              .message(
                'Voor deze overdracht werd al een eindfactuur voor de overdrager aangemaakt. Gelieve de nodige stappen hiervoor te ondernemen.'
              )
              .okBtn('Ok')
              .open()
              .result.catch(); // catch error not related to the result (modal open...)
          }
          if (data.vorigeStatus == 'OPGEZEGD') {
            this.modal
              .alert()
              .title('OPGELET')
              .message(
                'Voor deze opzegging werd al een eindfactuur aangemaakt. Gelieve de nodige stappen hiervoor te ondernemen.'
              )
              .okBtn('Ok')
              .open()
              .result.catch(); // catch error not related to the result (modal open...)
          }
        },
        (x) => {
          this.toastr.error(
            'Kon de abonnement wijzigingen niet doorvoeren',
            'Wijzig Status'
          );
          if (x.ExtraInfo) {
            for (let xtra in x.ExtraInfo) {
              this.toastr.warning(xtra, x.ExtraInfo[xtra].join(','));
            }
          } else if (x) {
            this.toastr.warning(x.replace(/(<([^>]+)>)/gi, ''));
          }
        }
      );
  }

  private enableControl(name: string, defaultValue: any) {
    const ctrl = this.statusForm.get(name);
    if (ctrl) {
      ctrl.enable();
      ctrl.reset();
      ctrl.setValue(defaultValue);
      ctrl.markAsPristine({ onlySelf: true });
    }
  }

  private disableControl(name: string) {
    const ctrl = this.statusForm.get(name);
    if (ctrl) {
      ctrl.disable();
      ctrl.reset();
    }
  }
  private disableDates() {
    this.mogelijkeEindData = new Array<Date>();
    new Date().endDates(5).forEach(function (item) {
      this.mogelijkeEindData.push(item);
    }, this);
  }
  private enableDates() {
    this.mogelijkeEindData = new Array<Date>();
  }

  private kavelsBeschikbaarVoorTerugLopend(): boolean {
    for (let item of this.kavels) {
      if (
        item.kavelStatus === KavelStatusEnum.Gereserveerd ||
        KavelStatusEnum.BezetGereserveerd
      ) {
        return false;
      }
    }
    return true;
  }

  private getKavels(): void {
    this.kavelService
      .getAllKavelsForAbonnement(this.data.markt.id, this.data.id)
      .subscribe(
        (kavels) => {
          this.kavels = kavels;

          if (this.statusForm.get('overTeNemenKavelIds'))
            this.statusForm.removeControl('overTeNemenKavelIds');

          this.statusForm.addControl(
            'overTeNemenKavelIds',
            this.fb.array(
              this.kavels.map((x) => {
                x['enabled'] = false;
                return {
                  value: x.id,
                  disabled: true,
                };
              })
            )
          );
        },
        (error) => {
          this.toastr.error('Kon de kavels voor dit abonnement niet inladen');
        }
      );
  }

  selectKavel(index: number, kavel: IKavelIdentifierDto) {
    const kavels = this.statusForm.get('overTeNemenKavelIds') as FormArray;
    const kavelCtrl = kavels.at(index);
    if (kavelCtrl.enabled) {
      kavelCtrl.disable();
      kavel['enabled'] = false;
    } else {
      kavelCtrl.enable();
      kavel['enabled'] = true;
    }
  }

  files: any = {};

  fileUploaded($event: any) {
    this.files[$event.name] = $event.files;
  }

  briefBetekeningOpzegDatumChanged($event: Date) {
    const newDate = $event.addMonths(6);
    this.statusForm.patchValue({ eindDatumAbonnement: newDate });
  }
  showPersistModal() {
    var message =
      'De startdatum van uw ' +
      (this.status === 'GESCHORST' ? 'schorsing' : 'opschorting') +
      ' ligt in het verleden. Wenst u hiermee verder te gaan?';
    var isFilesEmpty = !Object.keys(this.files).length;

    this.modal
      .confirm()
      .title('Bevestig status wijziging')
      .body(message)
      .okBtn('Bevestigen')
      .cancelBtn('Terug')
      .open()
      .result.catch() // catch error not related to the result (modal open...)
      .then((dialog) => dialog.result) // dialog has more properties,lets just return the promise for a result.
      .then((x) => this.persist()) // if were here ok was clicked.
      .catch((x) => {}); // if were here cancel was clicked.
  }
}
