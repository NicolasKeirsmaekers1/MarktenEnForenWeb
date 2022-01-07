import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService, Privilege } from '../auth';
import { MarktPanelComponent } from '../componenten/markt-select';
import { ProductPanelComponent } from '../componenten/product-select';
import { ValidatorService } from '../componenten/validators';
import { ApplicationConstants, IPagedResult, IQueryParameters } from '../core';
import { AanvraagService } from '../services/aanvraag.service';
import { AbonnementService } from '../services/abonnement.service';
import { IntakeService } from '../services/intake.service';
import { DateTimeHelper } from '../shared/helper/datetimehelper';

@Component({
  templateUrl: './html/wachtlijst-intake-detail.component.html',
})
export class WachtlijstIntakeDetailComponent implements OnInit {
  private aanvraagSoort = ApplicationConstants.AanvraagSoort;
  intake: any;
  klant: any;
  klantId: number;
  aantalKavels: number = 0;
  teBetalen: number = 0;
  intakeForm: FormGroup;
  errorMessage: any;
  aanvraag: any;
  title: string;
  isRuiling: boolean = false;
  deleted: boolean = false;
  marktDisabled: boolean = false;
  geregistreerd: boolean = false;
  maxKavels: number = 8;

  page: IQueryParameters = { page: 1, pageSize: Number.MAX_VALUE, sort: [''] };
  abonnementen: IPagedResult<any>;
  abonnementSearchCriteria: IAbonnementSearchCriteria = {
    marktId: 0,
    query: '',
    productId: 0,
    verkoopCode: '',
    statusCode: '',
    beginDatum: null,
    eindDatum: null,
    klantId: 0,
  };

  disabled: boolean = false;
  bewaarButton: Observable<boolean>;
  bewaarButtonText: string;
  statusChangeButton: Observable<boolean>;
  statusChangeButtonText: string;
  directBewarenButton: Observable<boolean>;
  directBewarenButtonText: string;
  deleteButton: Observable<boolean>;

  @ViewChild(MarktPanelComponent, { static: false })
  private marktPanel: MarktPanelComponent;
  @ViewChild(ProductPanelComponent, { static: false })
  private productPanel: ProductPanelComponent;

  get producten(): FormArray {
    return this.intakeForm.get('producten') as FormArray;
  }

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private aanvraagService: AanvraagService,
    private abonnementService: AbonnementService,
    private auth: AuthService,
    private router: Router,
    private modal: Modal,
    private dateTimeHelper: DateTimeHelper,
    private validationService: ValidatorService,
    private intakeService: IntakeService
  ) {}

  ngOnInit(): void {
    this.klant = this.route.snapshot.data['klant'] || {};

    this.intake = this.route.snapshot.data['intake'] || {
      id: 0,
      soortCode: '',
      uitstallingCode: '',
      verkoopCode: '',
      elektriciteitCode: '',
      opmerking: '',
      isBetaald: false,
      isDocumentenOk: false,
      isUitgesteld: false,
      producten: [],
      aanvraagMarkten: [],
      klantId: 0,
      officieleInschrijvingsDatum: '',
      statusCode: ApplicationConstants.AanvraagStatus.Intake,
    };

    this.klantId =
      this.intake.statusCode === ApplicationConstants.AanvraagStatus.Intake &&
      this.intake.id === 0
        ? this.klant.id
        : this.intake.klantId;

    this.buildForm();
    this.setModus();

    if (
      typeof this.intake.deletedOn !== 'undefined' &&
      this.intake.deletedOn != null
    ) {
      this.deleted = true;
      this.intakeForm.get('soortCode').disable();
      this.intakeForm.get('uitstallingCode').disable();
      this.intakeForm.get('verkoopCode').disable();
      this.intakeForm.get('elektriciteitCode').disable();
      this.intakeForm.get('opmerking').disable();
      this.intakeForm.get('isBetaald').disable();
      this.intakeForm.get('officieleInschrijvingsDatum').disable();
      this.intakeForm.get('isDocumentenOk').disable();
      this.intakeForm.get('isUitgesteld').disable();
      this.intakeForm.get('uitgesteldDatum').disable();
    }

    if (
      this.intake.soortCode ==
      ApplicationConstants.AanvraagSoort.PlaatsKwijtgeraaktCode
    ) {
      this.marktDisabled = true;
    }

    if (this.intake.id !== 0) {
      this.getTotaalAantalKavels(this.intake.aanvraagMarkten);
    }
  }

  private buildForm(): void {
    this.intakeForm = this.fb.group({
      id: [this.intake.id],
      soortCode: [
        { value: this.intake.soortCode, disabled: this.intake.id > 0 },
        [Validators.required],
      ],
      uitstallingCode: [this.intake.uitstallingCode, [Validators.required]],
      verkoopCode: [this.intake.verkoopCode, [Validators.required]],
      elektriciteitCode: [this.intake.elektriciteitCode, [Validators.required]],
      opmerking: [this.intake.opmerking],
      isBetaald: [this.intake.isBetaald],
      isDocumentenOk: [this.intake.isDocumentenOk],
      isUitgesteld: [this.intake.isUitgesteld],
      klantId: [this.klantId],
      officieleInschrijvingsDatum: [this.intake.officieleInschrijvingsDatum],
      uitgesteldDatum: [this.intake.uitgesteldDatum],
      statusCode: [this.intake.statusCode],
      datum: [this.intake.datum],
    });
  }

  getTotaalAantalKavels(aanvraagMarkten: any): void {
    for (let aanvraagmarkt of aanvraagMarkten) {
      this.aantalKavels += aanvraagmarkt.aantalKavels;
    }
    if (
      this.intake.soortCode ==
        ApplicationConstants.AanvraagSoort.PlaatsKwijtgeraaktCode ||
      this.intake.soortCode ==
        ApplicationConstants.AanvraagSoort.NieuwePlaatsCode
    ) {
      this.teBetalen = this.aantalKavels * 5;
    } else {
      this.teBetalen = 5;
    }
  }

  marktenChanged($event: Array<any>) {
    let totaalAantalKavels = $event
      .map((x) => x.aantalKavels)
      .reduce((a, b) => a + b, 0);
    if (
      this.intake.soortCode ==
        ApplicationConstants.AanvraagSoort.PlaatsKwijtgeraaktCode ||
      this.intake.soortCode ==
        ApplicationConstants.AanvraagSoort.NieuwePlaatsCode ||
      this.intakeForm.get('soortCode').value ==
        ApplicationConstants.AanvraagSoort.NieuwePlaatsCode ||
      this.intakeForm.get('soortCode').value ==
        ApplicationConstants.AanvraagSoort.PlaatsKwijtgeraaktCode
    ) {
      this.teBetalen = totaalAantalKavels * 5;
    } else {
      this.teBetalen = 5;
    }
    this.aantalKavels = totaalAantalKavels;
  }

  isBetaaldChanged($event) {
    if ($event && !this.intakeForm.get('officieleInschrijvingsDatum').value) {
      this.intakeForm.get('officieleInschrijvingsDatum').setValue(new Date());
    } else {
      this.intakeForm.get('officieleInschrijvingsDatum').setValue(null);
    }
  }

  statusChange() {
    var valid = true;
    if (
      this.intake.soortCode !==
      ApplicationConstants.AanvraagSoort.PlaatsKwijtgeraaktCode
    ) {
      if (!this.validateMarkten()) {
        this.toastr.info('Kies ten minste 1 markt', 'Aanvraag bewaren');
        valid = false;
      }
    }

    if (
      !this.validateProducten() &&
      (this.intakeForm.value.soortCode ===
        ApplicationConstants.AanvraagSoort.NieuwePlaatsCode ||
        this.intakeForm.value.soortCode ===
          ApplicationConstants.AanvraagSoort.PlaatsKwijtgeraaktCode)
    ) {
      this.toastr.info('Kies ten minste 1 product', 'Aanvraag bewaren');
      valid = false;
    }

    var hasMain = false;
    if (this.validateProducten()) {
      for (var i = 0; i < this.intakeForm.value.producten.length; i++) {
        if (this.intakeForm.value.producten[i].isHoofdcategorie) {
          hasMain = true;
        }
      }
      if (!hasMain) {
        this.toastr.warning(
          'Kies ten minste 1 hoofdproduct',
          'Aanvraag bewaren'
        );
        valid = false;
      }
    }

    if (!this.intakeForm.valid && !valid) this.intakeForm.markAsDirty();
    else {
      switch (this.intake.statusCode) {
        case ApplicationConstants.AanvraagStatus.Intake:
          this.preregistreren();
          break;
        case ApplicationConstants.AanvraagStatus.Gepreregistreerd:
          this.registreren();
          break;
      }
    }
  }

  preregistreren() {
    if (!this.validateDocuments())
      this.toastr.info(
        "Kan aanvraag niet naar 'gepreregistreerd' zetten omdat de documenten nog niet in orde zijn."
      );
    else this.showPreregistratieModal();
  }

  registreren() {
    var valid = true;
    if (!this.validateDocuments()) {
      this.toastr.info(
        "Kan aanvraag niet naar 'geregistreerd' zetten omdat de documenten nog niet in orde zijn."
      );
      valid = false;
    }

    if (
      this.intakeForm.value.isBetaald == null ||
      this.intakeForm.value.isBetaald === false
    ) {
      this.toastr.info(
        "Kan aanvraag niet naar 'geregistreerd' zetten omdat er nog niet betaald werd."
      );
      valid = false;
    }

    if (valid) this.showRegistratieModal();
  }

  setModus() {
    this.directBewarenButton = this.auth.hasPermission(
      Privilege.Aanvraag.DirectRegistreren
    );
    this.directBewarenButtonText = 'Direct registreren';
    switch (this.intake.statusCode) {
      case ApplicationConstants.AanvraagStatus.Intake:
        if (this.intake.id === 0) {
          this.title = 'Nieuw intake > ' + this.klant.firmanaam;
        } else {
          this.title = 'Intake bewerken > ' + this.intake.klant.firmanaam;
          this.statusChangeButton = this.auth.hasPermission(
            Privilege.Aanvraag.VeranderNaarGepreregistreerd
          );
          this.statusChangeButtonText = 'Pre-registreren';
        }
        this.bewaarButtonText = 'Intake bewaren';
        this.bewaarButton = this.auth.hasPermission(Privilege.Aanvraag.Add);
        break;
      case ApplicationConstants.AanvraagStatus.Gepreregistreerd:
        this.title =
          'Pre-registratie bewerken > ' + this.intake.klant.firmanaam;
        this.bewaarButtonText = 'Pre-registratie bewaren';
        this.bewaarButton = this.auth.hasPermission(
          Privilege.Aanvraag.PreregistratieBewerken
        );
        this.statusChangeButton = this.auth.hasPermission(
          Privilege.Aanvraag.VeranderNaarGepreregistreerd
        );
        this.statusChangeButtonText = 'Registreren';
        break;
      case ApplicationConstants.AanvraagStatus.Geregistreerd:
        this.geregistreerd = true;
        this.title = 'Registratie bewerken > ' + this.intake.klant.firmanaam;
        this.bewaarButtonText = 'Registratie bewaren';
        this.bewaarButton = this.auth.hasPermission(
          Privilege.Aanvraag.RegistratieBewerken
        );
        this.deleteButton = this.auth.hasPermission(
          Privilege.Aanvraag.RegistratieVerwijderen
        );
        break;
    }
  }

  showPreregistratieModal() {
    this.modal
      .confirm()
      .title('Bevestig pre-registratie')
      .body('Bent u zeker dat u deze intake wilt pre-registreren?')
      .okBtn('Bevestig')
      .open()
      .result.catch() // catch error not related to the result (modal open...)
      .then((dialog) => dialog.result) // dialog has more properties, let's just return the promise for a result.
      .then((x) =>
        this.aanvraagService
          .changeStatus(
            this.intake.id,
            ApplicationConstants.AanvraagStatus.Gepreregistreerd,
            this.intakeForm.getRawValue()
          )
          .subscribe(
            (x) => {
              this.router.navigate(['wachtlijst', 'preregistratie']);
            },
            (x) => {
              this.toastr.error(
                "Kan aanvraag niet naar 'gepreregistreerd' zetten."
              );
              this.displayErrors(x);
            }
          )
      ) // if we're here, ok was clicked.
      .catch((x) => {}); // if we're here, cancel was clicked.
  }

  showRegistratieModal() {
    this.modal
      .confirm()
      .title('Bevestig registratie')
      .body('Bent u zeker dat u deze pre-registratie wilt registreren?')
      .okBtn('Bevestig')
      .open()

      .result.catch() // catch error not related to the result (modal open...)
      .then((dialog) => dialog.result) // dialog has more properties, let's just return the promise for a result.
      .then((x) =>
        this.aanvraagService
          .changeStatus(
            this.intake.id,
            ApplicationConstants.AanvraagStatus.Geregistreerd,
            this.intakeForm.getRawValue()
          )
          .subscribe(
            (x) => {
              this.router.navigate(['wachtlijst', 'registratie']);
            },
            (x) => {
              var error = 'de status kan niet veranderd worden.';
              this.toastr.error('de status kan niet veranderd worden.');
              if (this.toastr.error.length != error.length) {
                this.displayErrors(x);
              }
            }
          )
      ) // if we're here, ok was clicked.
      .catch((x) => {}); // if we're here, cancel was clicked.
  }

  showRegistratieDeleteModal() {
    var currentDate = this.dateTimeHelper.getCurrentDate();
    var text = '';

    currentDate.setHours(0, 0, 0, 0);
    var geldig =
      this.intake.officieleInschrijvingsDatum != null &&
      new Date(currentDate) <=
        new Date(this.intake.officieleInschrijvingsDatum) &&
      new Date(currentDate.setFullYear(currentDate.getFullYear() + 1)) >=
        new Date(this.intake.officieleInschrijvingsDatum);

    if (geldig) text += 'Het inschrijvingsrecht is nog steeds geldig. ';

    text +=
      'Weet u zeker dat u deze aanvraag wilt verwijderen? Deze actie is onomkeerbaard.';

    this.modal
      .confirm()
      .title('Bevestig verwijderen registratie')
      .body(text.toString())
      .okBtn('Bevestig')
      .open()
      .result.catch() // catch error not related to the result (modal open...)
      .then((dialog) => dialog.result) // dialog has more properties, let's just return the promise for a result.
      .then((x) =>
        this.aanvraagService.delete(this.intake.id).subscribe(
          (x) => {
            this.toastr.info('Registratie succesvol verwijderd');
            this.router.navigate(['wachtlijst', 'registratie']);
          },
          (x) => {
            this.toastr.error('Kon registratie niet verwijderen.');
            this.displayErrors(x);
          }
        )
      ) // if we're here, ok was clicked.
      .catch((x) => {}); // if we're here, cancel was clicked.
  }

  showDirectModal() {
    if (
      this.intakeForm.value.aanvraagMarkten &&
      this.intakeForm.value.aanvraagMarkten.length > 1
    ) {
      this.toastr.warning('Niet meer dan 1 aanvraagmarkt selecteren!');
      return;
    }

    this.modal
      .confirm()
      .title('Direct registreren')
      .body('Wilt u deze intake rechtstreeks omzetten naar een registratie?')
      .okBtn('Bevestig')
      .open()
      .result.catch() // catch error not related to the result (modal open...)
      .then((dialog) => dialog.result) // dialog has more properties, let's just return the promise for a result.
      .then((x) =>
        this.aanvraagService
          .changeStatus(
            this.intake.id,
            ApplicationConstants.AanvraagStatus.Geregistreerd,
            this.intakeForm.getRawValue()
          )
          .subscribe(
            (x) => {
              this.router.navigate(['wachtlijst', 'registratie']);
            },
            (x) => {
              this.toastr.error(
                "Kan aanvraag niet naar 'geregistreerd' zetten."
              );
              var error = 'de status kan niet veranderd worden.';
              if (this.toastr.error.length != error.length) {
                this.displayErrors(x);
              }
            }
          )
      ) // if we're here, ok was clicked.
      .catch((x) => {}); // if we're here, cancel was clicked.
  }
  changeSoortCode($event) {
    this.intakeForm.get('uitstallingCode').reset();
    this.intakeForm.get('verkoopCode').reset();
    this.intakeForm.get('elektriciteitCode').reset();
    this.teBetalen = 0;
    if (this.marktPanel) this.marktPanel.reset();
    if (this.productPanel) this.productPanel.reset();

    switch ($event) {
      case ApplicationConstants.AanvraagSoort.NieuwePlaatsCode:
        this.intakeForm.get('uitstallingCode').enable();
        this.intakeForm.get('verkoopCode').enable();
        this.intakeForm.get('elektriciteitCode').enable();
        this.isRuiling = false;
        this.maxKavels = 8;
        break;
      case ApplicationConstants.AanvraagSoort.PlaatsKwijtgeraaktCode:
        this.intakeForm.get('uitstallingCode').enable();
        this.intakeForm.get('verkoopCode').enable();
        this.intakeForm.get('elektriciteitCode').enable();
        this.isRuiling = false;
        if (!this.page) {
          this.page.page = 1;
          this.page.pageSize = Number.MAX_VALUE;
          this.page.sort = [''];
        }
        this.abonnementSearchCriteria.klantId = this.klantId;
        this.abonnementSearchCriteria.statusCode =
          ApplicationConstants.AbonnementStatus.IngetrokkenCode;
        this.abonnementService
          .getAll(this.page, this.abonnementSearchCriteria)
          .subscribe((abonnementen) => {
            if (abonnementen.embedded.resourceList.length > 0) {
              this.intakeForm
                .get('uitstallingCode')
                .setValue(
                  abonnementen.embedded.resourceList[0].uitstallingCode
                );
              this.intakeForm
                .get('verkoopCode')
                .setValue(abonnementen.embedded.resourceList[0].verkoopCode);
              this.intakeForm
                .get('elektriciteitCode')
                .setValue(
                  abonnementen.embedded.resourceList[0].elektriciteitCode
                );
              this.maxKavels = 0;
              for (let abonnement of abonnementen.embedded.resourceList) {
                if (abonnement.aantalKavels > this.maxKavels)
                  this.maxKavels = abonnement.aantalKavels;
              }
            } else {
              this.toastr.info(
                'Deze klant heeft geen ingetrokken abonnementen.'
              );
              this.intakeForm
                .get('soortCode')
                .setValue(ApplicationConstants.AanvraagSoort.NieuwePlaatsCode);
            }
          });
        break;
      default:
        this.intakeForm.get('uitstallingCode').disable();
        this.intakeForm.get('verkoopCode').disable();
        this.intakeForm.get('elektriciteitCode').disable();
        this.isRuiling = true;
        this.maxKavels = 8;
        break;
    }
  }

  onSubmit(): void {
    let valid = true;
    if (!this.intakeForm.valid) {
      this.toastr.warning(
        'Sommige velden bevatten geen geldige waarden',
        'Ongeldig formulier'
      );
      valid = false;
    }

    if (
      this.intakeForm.value.aanvraagMarkten &&
      this.intakeForm.value.aanvraagMarkten.length > 1
    ) {
      this.toastr.warning('Niet meer dan 1 aanvraagmarkt selecteren!');
      valid = false;
    }

    if (
      this.intake.soortCode !==
      ApplicationConstants.AanvraagSoort.PlaatsKwijtgeraaktCode
    ) {
      if (!this.validateMarkten() && this.intakeForm.get('soortCode').value) {
        this.toastr.warning('Kies ten minste 1 markt', 'Aanvraag bewaren');
        valid = false;
      }
    }

    if (
      !this.validateProducten() &&
      (this.intakeForm.value.soortCode ===
        ApplicationConstants.AanvraagSoort.NieuwePlaatsCode ||
        this.intakeForm.value.soortCode ===
          ApplicationConstants.AanvraagSoort.PlaatsKwijtgeraaktCode)
    ) {
      this.toastr.warning('Kies ten minste 1 product', 'Aanvraag bewaren');
      valid = false;
    }
    var hasMain = false;

    if (this.validateProducten()) {
      for (var i = 0; i < this.intakeForm.value.producten.length; i++) {
        if (this.intakeForm.value.producten[i].isHoofdcategorie) {
          hasMain = true;
        }
      }

      if (!hasMain) {
        this.toastr.warning(
          'Kies ten minste 1 hoofdproduct',
          'Aanvraag bewaren'
        );
        valid = false;
      }
    }

    if (!valid) {
      this.validationService.valideFormGroup(this.intakeForm);
      return;
    }

    this.aanvraagService
      .save(this.intakeForm.getRawValue())
      .pipe(
        map((response: Response) => {
          this.aanvraag = response;
          this.intakeForm.patchValue({
            id: this.intake.id,
            soortCode: this.intake.soortCode,
            uitstallingCode: this.intake.uitstallingCode,
            verkoopCode: this.intake.verkoopCode,
            elektriciteitCode: this.intake.elektriciteitCode,
            opmerking: this.intake.opmerking,
            isBetaald: this.intake.isBetaald,
            isDocumentenOk: this.intake.isDocumentenOk,
            isUitgesteld: this.intake.isUitgesteld,
            officieleInschrijvingsDatum:
              this.intake.officieleInschrijvingsDatum,
            uitgesteldDatum: this.intake.uitgesteldDatum,
            statusCode: this.intake.statusCode,
            datum: this.intake.datum,
          });
        })
      )
      .subscribe(
        () => {
          this.toastr.success('Aanvraag succesvol bewaard', 'Aanvraag bewaren');
          let route: string;
          switch (this.intake.statusCode.toUpperCase()) {
            case 'GEPREREGISTREERD':
              route = 'preregistratie';
              break;
            case 'GEREGISTREERD':
              route = 'registratie';
              break;
            case 'GERESERVEERD':
              route = 'reservatie';
              break;
            default:
              route = 'intake';
              break;
          }

          this.router.navigate(['wachtlijst', route]);
        },
        (x) => {
          this.toastr.error(
            'Aanvraag kon niet worden bewaard.',
            'Aanvraag bewaren'
          );
          this.displayErrors(x);
        }
      );
  }

  validateDocuments(): boolean {
    return (
      this.intakeForm.value && this.intakeForm.value.isDocumentenOk === true
    );
  }

  validateMarkten(): boolean {
    return (
      this.intakeForm.value.aanvraagMarkten &&
      this.intakeForm.value.aanvraagMarkten.length > 0
    );
  }

  validateProducten(): boolean {
    return (
      this.intakeForm.value.producten &&
      this.intakeForm.value.producten.length > 0
    );
  }

  private displayErrors(x: any) {
    if (x.ExtraInfo) {
      for (let xtra in x.ExtraInfo) {
        this.toastr.warning(x.ExtraInfo[xtra].join(','), xtra);
      }
    }
  }
}

export interface IAbonnementSearchCriteria {
  marktId?: number;
  query?: string;
  productId?: number;
  verkoopCode?: string;
  statusCode?: string;
  beginDatum?: Date;
  eindDatum?: Date;
  klantId?: number;
}
