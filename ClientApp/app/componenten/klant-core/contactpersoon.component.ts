import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";
import { CustomValidators } from "../validators";

export class Persoon {
    id: number = 0;
    voornaam: string;
    naam: string;
    straat?: string;
    huisNummer?: string;
    postcode?: string;
    gemeente?: string;
    telefoon?: string;
    gsm?: string;
    fax?: string;
    email?: string;
    isHoofdcontactPersoon: boolean;

    constructor(hoofdcontact: boolean, voornaam: string = "", naam: string = "") {
        this.voornaam = voornaam;
        this.naam = naam;
        this.isHoofdcontactPersoon = hoofdcontact;
    }
}

@Component({
    selector: "mafo-contactpersoon",
    templateUrl: "./html/contactpersoon.component.html"
})
export class ContactPersoonComponent implements OnInit {
    @Input() selector: string;
    @Input("group") contactPersoonForm: FormGroup;
    @Output() hoofdContactChanged = new EventEmitter();
    @Output() removed = new EventEmitter();

    private get title(): string {
        let title = this.contactPersoonForm.get("voornaam").value + " " + this.contactPersoonForm.get("naam").value;
        return title.replace(/\s/g, "").length <= 0 ? "Nieuwe contactpersoon" : title;
    }

    public get hoofdContact(): boolean {
        return this.contactPersoonForm.get("isHoofdcontactPersoon").value as boolean;
    }

    @Input()
    public set hoofdContact(value: boolean) {
        let control = this.contactPersoonForm.get("isHoofdcontactPersoon");
        control.setValue(value);
        //control.disable();
        this.hoofdContactChanged.emit();
    }

    @Input() persoon: Persoon;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        if (!this.persoon) this.persoon = new Persoon(false);
        this.buildForm();
    }

    hoofdcontactSelected(): void {
        this.hoofdContact = true;
    }

    remove($event: Event): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.removed.emit();
    }

    private buildForm(): void {
        this.contactPersoonForm.addControl("id", this.fb.control(this.persoon.id));
        this.contactPersoonForm.addControl("voornaam", this.fb.control(this.persoon.voornaam, [Validators.required, Validators.maxLength(50)]));
        this.contactPersoonForm.addControl("naam", this.fb.control(this.persoon.naam, [Validators.required, Validators.maxLength(50)]));
        this.contactPersoonForm.addControl("telefoon", this.fb.control(this.persoon.telefoon, [Validators.maxLength(30), Validators.pattern("(\\+|0)\\d+")]));
        this.contactPersoonForm.addControl("gsm", this.fb.control(this.persoon.gsm, [Validators.maxLength(30), Validators.pattern("(\\+|0)\\d+")]));
        this.contactPersoonForm.addControl("fax", this.fb.control(this.persoon.fax, [Validators.maxLength(30), Validators.pattern("(\\+|0)\\d+")]));
        this.contactPersoonForm.addControl("email", this.fb.control(this.persoon.email, [Validators.maxLength(50), CustomValidators.validEmail]));
        this.contactPersoonForm.addControl("isHoofdcontactPersoon", this.fb.control({ value: this.persoon.isHoofdcontactPersoon, disabled: false }, []));
        this.contactPersoonForm.addControl("adres", this.fb.group({}));
    }
}