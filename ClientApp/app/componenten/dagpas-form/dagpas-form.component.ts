import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { CustomValidators, ValidatorService  } from "../validators";
import { OndernemingService } from "../../services/onderneming.service";
import { KlantService } from "../klant-core/klant.service";
import { ToastrService} from 'ngx-toastr';
import { Adres } from "../klant-core/app.address";
import { Persoon } from "../klant-core/contactpersoon.component";

interface IKlant {
    id?: number;
    juridischeEntiteit: string;
    elektriciteit: string
    firmanaam: string,
    ondernemingsnr: string;
    telefoon: string;
    gsm: string;
    email: string;
    fax: string;
    maatschappelijkeZetel: Adres;
    contactPersonen: Persoon[];
}

@Component({
    selector: "mafo-dagpas-form",
    templateUrl: "./dagpas-form.layout.html"
})
export class DagpasFormComponent implements OnInit {
    @Input() selector: string;
    @Output() klantOutput = new EventEmitter<string>();
    @Input("group") elektriciteitForm: FormGroup;

    klant: IKlant;
    isReadonly = false;
    contact: Persoon;
    searchOndernemingsnummer(e): void {
        if (e) {
            const ondernemingen = this.ondernemingService.search(e.value)
                .subscribe(x => {
                    this.klant = x;
                    this.getContactpersoon();
                    //this.klantForm.patchValue(x);
                    //this.klantForm.controls['contactpersoonGSM'].setValue(this.contact.gsm);
                    //this.klantForm.controls['contactpersoonNaam'].setValue(this.contact.naam);
                    //this.klantForm.controls['contactpersoonVoornaam'].setValue(this.contact.voornaam);

                    //this.klantForm.get('juridischeEntiteit').disable();
                    this.isReadonly = true;

                }, error => {
                    this.toastr.warning("Onderneming niet gevonden in het systeem.", "Onderneming niet gevonden");
                    //this.klantForm.get('juridischeEntiteit').enable();
                    this.isReadonly = false;
                });
        }
    }



    constructor(private fb: FormBuilder,
        private ondernemingService: OndernemingService,
        private toastr: ToastrService,
        private klantService: KlantService,
        private validationService: ValidatorService
    ) { }

    ngOnInit(): void {
        const adres = new Adres();

        this.klant = {
            id: 0,
            juridischeEntiteit: "",
            elektriciteit: "",
            firmanaam: "",
            ondernemingsnr: "",
            telefoon: "",
            gsm: "",
            email: "",
            fax: "",
            maatschappelijkeZetel: adres,
            contactPersonen: [new Persoon(true)]
        };
        this.contact = new Persoon(true);
        this.buildForm();
    }

    private buildForm(): void {
        //this.klantForm = this.fb.group({
        //    id: [this.klant.id],
        //    'ondernemingsnr': [this.klant.ondernemingsnr],
        //    'firmanaam': [this.klant.firmanaam, [Validators.required, Validators.maxLength(100)]],
        //    'juridischeEntiteit': [this.klant.juridischeEntiteit, [Validators.required]],
        //    'telefoon': [this.klant.telefoon, [Validators.maxLength(30), Validators.pattern("(\\+|0)\\d+")]],
        //    'fax': [this.klant.fax, [Validators.maxLength(30), Validators.pattern("(\\+|0)\\d+")]],
        //    'gsm': [this.klant.gsm, [Validators.maxLength(30), Validators.pattern("(\\+|0)\\d+")]],
        //    'email': [this.klant.email, [Validators.required, Validators.maxLength(50), CustomValidators.validEmail]],
        //    'contactpersoonNaam': [this.contact.naam, [Validators.required, Validators.maxLength(50)]],
        //    'contactpersoonGSM': [this.contact.gsm, [Validators.required, Validators.maxLength(30), Validators.pattern("(\\+|0)\\d+")]],
        //    'contactpersoonVoornaam': [this.contact.voornaam, [Validators.required, Validators.maxLength(50)]],
        //    'maatschappelijkeZetel': this.fb.group({}),
        //    'elektriciteitCode': [this.klant.elektriciteit, [Validators.required]]
        //});
        this.elektriciteitForm = this.fb.group({
            'elektriciteitCode': [this.klant.elektriciteit, [Validators.required]]
        });

    }
    private getContactpersoon() {
        if (this.klant.contactPersonen.filter(item => item.isHoofdcontactPersoon)) {
            this.contact = this.klant.contactPersonen.filter(item => item.isHoofdcontactPersoon)[0];
        }
    }

    public getKlant(kavels): string {
        if (!this.elektriciteitForm.valid) {
            this.validationService.valideFormGroup(this.elektriciteitForm);
            this.toastr.warning("Sommige velden bevatten geen geldige waarden", "Ongeldig formulier");
        }
        else {
        }
        return "testString";
    }
}