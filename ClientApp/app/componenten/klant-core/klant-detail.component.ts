import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import { KlantService, IKlant } from "./klant.service";
import { OndernemingService } from "./onderneming.service";
import { AbonnementService } from "../../services";
import { CustomValidators, ValidatorService } from "../validators";
import { IGridOptions, SortOrder } from "../datagrid";
import { ApplicationConstants, IPagedResult, IQueryParameters } from "../../core";
import { AuthService, Privilege } from "../../auth";
import { Persoon } from "./contactpersoon.component";
import { Adres } from "./app.address";
import { IMessageEnrichedModel } from "../../services/MessageEnrichedModel";


@Component({
    selector: "klant-detail",
    templateUrl: "./html/klant-detail.component.html"
})
export class KlantDetailCoreComponent implements OnInit {
    @Input() selectType: boolean = false;
    @Input() limitedView: boolean = false;
    private _klant = new BehaviorSubject<IKlant>(null);

    @Input()
    set klant(value: IKlant) {
        if (value.contactPersonen && value.contactPersonen.length === 0)
            value.contactPersonen = [new Persoon(true)];
        const local = Object.assign({
            id: 0,
            isCommercieel: true,
            firmanaam: "",
            juridischeEntiteit: "",
            ondernemingsnr: "",
            telefoon: "",
            gsm: "",
            email: "",
            fax: "",
            contactPersonen: [new Persoon(true)],
            maatschappelijkeZetel: new Adres(),
            facturatieAdres: new Adres(),
            kboStatus: ""
        }, value);
        if (this.klant !== local)
            this._klant.next(local);
    };

    get klant(): IKlant {
        return this._klant.getValue();
    }

    @Output() onCreated = new EventEmitter<IKlant>();

    private klantForm: FormGroup;
    private updateKlant: Observable<boolean>;
    private naamChanged: boolean;
    private telChanged: boolean;
    private gsmChanged: boolean;
    private faxChanged: boolean;
    private juridischChanged: boolean;
    private hasJuridischeEntiteitError: boolean = false;
    private emailChanged: boolean;
    private kboChanged: boolean;
    private klantUpdating: boolean;
    private klantUpdateAfgerond: boolean;
    private errorMessage: any;

    private get title(): string {
        let title = this.klantForm.get("firmanaam").value;
        return title.replace(/\s/g, "").length <= 0 ? "Nieuwe klant" : "Klant: " + title;
    }

    private facturatieAdresDisabled: boolean = false;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private toastr: ToastrService,
        private fb: FormBuilder,
        private klantSvc: KlantService,
        private ondernemingSvc: OndernemingService,
        private abonnementService: AbonnementService,
        private auth: AuthService,
        private validationService: ValidatorService
    ) { }

    ngOnInit(): void {
        this.security();
        this.buildForm();
        this._klant.subscribe(x => {
            if (this.klant) this.setKlant();
        });
        this.klantUpdating = false;
    }
    private checkChanges() {
        if (this.klantForm.controls['firmanaam'].value != this.klant.firmanaam) {
            this.naamChanged = true;
        } else { this.telChanged = false; }

        if (this.klantForm.controls['telefoon'].value != this.klant.telefoon) {
            this.telChanged = true;
        } else { this.telChanged = false; }

        if (this.klantForm.controls['gsm'].value != this.klant.gsm) {
            this.gsmChanged = true;
        } else { this.gsmChanged = false; }

        if (this.klantForm.controls['fax'].value != this.klant.fax) {
            this.faxChanged = true;
        } else { this.faxChanged = false; }

        if (this.klantForm.controls['juridischeEntiteit'].value != this.klant.juridischeEntiteit) {
            this.juridischChanged = true;
        } else { this.juridischChanged = false; }

        if (this.klantForm.controls['email'].value != this.klant.email) {
            this.emailChanged = true;
        } else { this.emailChanged = false; }

        if (this.klantForm.controls['kboStatus'].value != this.klant.kboStatus) {
            this.kboChanged = true;
        } else { this.kboChanged = false; }


    }
    private setKlant() {
        this.klantForm.markAsPristine();
        if (this.klantForm.controls['firmanaam'].value != "") {
            this.checkChanges();
        }

        this.klantForm.reset(this.klant);
        this.contactPersonen.controls.splice(0, this.contactPersonen.controls.length);
        for (const persoon of this.klant.contactPersonen) {
            this.contactPersonen.push(this.fb.group({}));
        }

        //if (this.klant.id <= 0) {
        //    const adres = new Adres();
        //    this.klant.maatschappelijkeZetel = adres;
        //}
        this.facturatieAdresDisabled = this.klant.id <= 0 ? true : JSON.stringify(this.klant.maatschappelijkeZetel) === JSON.stringify(this.klant.facturatieAdres);

    }

    searchOndernemingsnummer(messageEnrichedOndernmingOndernmening: IMessageEnrichedModel<any>): void {
        if (messageEnrichedOndernmingOndernmening) {
            this.hasJuridischeEntiteitError = false;

            if ("Juridische Entiteit" in messageEnrichedOndernmingOndernmening.messages) {
                this.errorMessage = messageEnrichedOndernmingOndernmening.messages["Juridische Entiteit"];
                this.hasJuridischeEntiteitError = true;
            }

            this.klant = messageEnrichedOndernmingOndernmening.data;
        }
        if (this.klant) this.setKlant();

    }

    //Openstaande aanvragen

    openstaandeAanvragenData: IPagedResult<any>;

    openstaandeAanvragenOptions: IGridOptions = {
        stripedRows: true,
        fields: [{
            field: "datum",
            title: "Datum",
            sortable: true,
            sort: SortOrder.Ascending
        }, {
            field: "status",
            title: "Status"
        }, {
            field: "positie",
            title: "Positie"
        }, {
            field: "soort",
            title: "Soort"
        }, {
            field: "markt.naam",
            title: "Markt"
        }, {
            field: "district",
            title: "District"
        }, {
            field: "aantalKavels",
            title: "Kavels"
        }, {
            field: "opmerkingen",
            title: "Opmerkingen"
        }]
    };

    fetchOpenstaandeAanvragen(page: IQueryParameters): void {
        this.klantSvc.getAanvragen(this.klant.id, page).subscribe(succes => {
            this.openstaandeAanvragenData = succes;
        }, x => {
            this.toastr.error("Kon de openstaande aanvragen voor deze klant niet inladen", "Openstaande aanvragen");
            if (x.ExtraInfo) {
                for (let xtra in x.ExtraInfo) {
                    this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                }
            }
        });
    }

    openstaandeAanvragenRowClicked(row: any) {
        switch (row.data.status) {
            case ApplicationConstants.AanvraagStatus.Intake:
                this.router.navigate(["wachtlijst", "intake", row.data.id]);
                break;
            case ApplicationConstants.AanvraagStatus.Gepreregistreerd:
                this.router.navigate(["wachtlijst", "preregistratie", row.data.id]);
                break;
            case ApplicationConstants.AanvraagStatus.Geregistreerd:
                this.router.navigate(["wachtlijst", "registratie", row.data.id]);
                break;
            case ApplicationConstants.AanvraagStatus.Gereserveerd:
                this.router.navigate(["wachtlijst", "reservatie", row.data.id]);
                break;
            default: ;
        }
    }

    //Abonnementen

    abonnementenData: IPagedResult<any>;

    abonnementenOptions: IGridOptions = {
        stripedRows: true,
        fields: [{
            field: "begindatum",
            title: "Begin",
            sortable: true,
            sort: SortOrder.Ascending
        }, {
            field: "einddatum",
            title: "Einde"
        }, {
            field: "markt.naam",
            title: "Markt"
        }, {
            field: "markt.districtCode",
            title: "District"
        }, {
            field: "aantalKavels",
            title: "# Kavels"
        }, {
            field: "statusCode",
            title: "Status"
        }, {
            field: "uitstallingCode",
            title: "Uitstalling"
        }, {
            field: "verkoopCode",
            title: "Verkoop"
        }, {
            field: "elektriciteitCode",
            title: "Elektriciteit"
        }]
    };

    fetchAbonnementen(page: IQueryParameters): void {
        this.abonnementService.getAll(page, { klantId: this.klant.id }).subscribe(x => {
            this.abonnementenData = x;
        }, error => {
            this.toastr.error("Kon de lopende abonnementen voor deze klant niet inladen", "Lopende abonnementen");
        });
    }

    abonnementenRowClicked(row: any) {
        this.router.navigate(["abonnement", row.data.id]);
    }

    //Contactpersonen

    get contactPersonen(): FormArray {
        return <FormArray>this.klantForm.get("contactPersonen");
    }

    hoofdContactChanged(index: number): void {
        this.contactPersonen.controls.forEach((fg: FormGroup, idx: number) => {
            if (idx === index) return;
            fg.get("isHoofdcontactPersoon").reset({ value: false, disabled: false });
        });
    }

    removeContactpersoon(index: number): void {
        this.contactPersonen.removeAt(index);
    }

    addContact(): void {
        const control = <FormArray>this.klantForm.controls["contactPersonen"];
        control.push(this.fb.group({}));
    };

    updateKlantFromKBO(): void {
        this.klantUpdating = true;
        this.hasJuridischeEntiteitError = false;

        if (this.klant.ondernemingsnr.length < 10) {
            this.toastr.warning("Ondernemingsnummer is te kort.", "Ongeldig ondernemingsnummer");
        } else {
            this.ondernemingSvc.updateFromKBO(this.klant.ondernemingsnr).subscribe(x => {
                this.klant = x.data;
                this.toastr.success("Gegevens van de klant zijn opgehaald uit KBO en geupdate", "Update onderneming");
                this.klantUpdating = false;
                this.klantUpdateAfgerond = true;

                if ("Juridische Entiteit" in x.messages) {
                    this.errorMessage = x.messages["Juridische Entiteit"];
                    this.hasJuridischeEntiteitError = true;
                }

                // if (this.klant) this.setKlant();
            }, error => {
                this.toastr.warning("Onderneming niet gevonden in het systeem.", "Onderneming niet gevonden");
                //this.onResult.emit(null);
            });

        }
    };

    //Form

    copyAddressToFacturation = () => {
        if (this.facturatieAdresDisabled) {
            this.klantForm.get("facturatieAdres").patchValue(this.klantForm.get("maatschappelijkeZetel").value);
        }
    }

    disableFacturatieAdres() {
        this.facturatieAdresDisabled = !this.facturatieAdresDisabled;
        this.copyAddressToFacturation();
    }

    private buildForm(): void {
        this.klantForm = this.fb.group({
            'id': [0],
            'isCommercieel': [true],
            'ondernemingsnr': ["", this.buildOndernemingsNrValidation()],
            'firmanaam': ["", [Validators.required, Validators.maxLength(100)]],
            'juridischeEntiteit': ["", [Validators.required]],
            'telefoon': ["", [Validators.maxLength(30), Validators.pattern("(\\+|0)\\d+")]],
            'fax': ["", [Validators.maxLength(30), Validators.pattern("(\\+|0)\\d+")]],
            'gsm': ["", [Validators.maxLength(30), Validators.pattern("(\\+|0)\\d+")]],
            'email': ["", [Validators.maxLength(50), CustomValidators.validEmail]],
            'kboStatus': ["", [Validators.maxLength(50)]],
            'maatschappelijkeZetel': this.fb.group({}),
            'facturatieAdres': this.fb.group({}),
            'contactPersonen': this.fb.array([])
        });
    }

    onSubmit(): void {
        if (!this.klantForm.valid) {
            this.validationService.valideFormGroup(this.klantForm);
            this.toastr.warning("Sommige velden bevatten geen geldige waarden", "Ongeldig formulier");
        }
        else {
            this.klantSvc.save(this.klantForm.value).subscribe((response: any) => {
                this.klant = response;
                //this.klantForm.patchValue(this.klant);
                if (this.onCreated.observers.length > 0) {
                    this.onCreated.emit(this.klant);
                }
                this.toastr.success("Klant succesvol bewaard", "Klant bewaren");
            }, (x) => {
                this.toastr.error("Klant kon niet worden bewaard.", "Klant bewaren");
                if (x.ExtraInfo) {
                    for (let xtra in x.ExtraInfo) {
                        this.toastr.warning(x.ExtraInfo[xtra].join(","), xtra);
                    }
                }
            });
        }
    };

    //Validation

    private buildOndernemingsNrValidation(): any[] {
        const validators = [Validators.pattern("^[0]\\d{9}$")];
        return this.klant && this.klant.isCommercieel ? [...validators, Validators.required] : validators;
    }

    security(): void {
        this.updateKlant = this.auth.hasPermission(Privilege.Klant.Update);
    }
}