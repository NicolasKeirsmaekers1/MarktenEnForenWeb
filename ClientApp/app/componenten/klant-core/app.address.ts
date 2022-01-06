import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";

@Component({
    selector: "mafo-address",
    templateUrl: "html/app.address.layout.html"
})
export class AddressComponent implements OnInit, OnChanges {
    @Input("group") addressForm: FormGroup;
    @Input() disable: boolean = false;
    @Input() required: boolean = false;
    @Output() change = new EventEmitter();

    private _address: Adres;
    @Input()
    set address(address: Adres) {
        this._address = address;
    }
    get address() {
        return this._address || new Adres();
    }

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.buildForm();
    }

    ngOnChanges(changes: SimpleChanges): void {
        //Dynamic add or remove validation by Input parameter
        if (changes["disable"] !== undefined && this.addressForm !== undefined) {
            let disabled = changes["disable"].currentValue;
            if (disabled) {
                this.addressForm.disable();
            } else {
                this.addressForm.enable();
            }
        }
        var address = changes["address"];
        if (address && this.addressForm && Object.keys(this.addressForm.controls).length > 0) {
            this.addressForm.setValue(this._address);
        }
    }

    private buildForm = (): void => {
        const validators: ValidatorFn[] = [];
        if (this.required) validators.push(Validators.required);

        this.addressForm.addControl("id", this.fb.control(this.address.id));
        this.addressForm.addControl("straat", this.fb.control(this.address.straat, validators));
        this.addressForm.addControl("nr", this.fb.control(this.address.nr, validators));
        this.addressForm.addControl("postcode", this.fb.control(this.address.postcode, validators));
        this.addressForm.addControl("gemeente", this.fb.control(this.address.gemeente, validators));
        this.addressForm.addControl("isMaatschappelijkeZetel", this.fb.control(this.address.isMaatschappelijkeZetel, validators));
        this.addressForm.addControl("isFacturatieAdres", this.fb.control(this.address.isFacturatieAdres, validators));

        if (this.disable) {
            this.addressForm.disable();
        }
    }
}

export class Adres {
    id?: number = 0;
    straat: string = "";
    nr: string = "";
    postcode: string = "";
    gemeente: string = "";
    isMaatschappelijkeZetel: boolean = false;
    isFacturatieAdres: boolean = false;

    constructor(id = 0, straat = "", nr = "", postcode = "", gemeente = "", isMaatschappelijkeZetel = false, isFacturatieAdres = false) {
        this.id = id;
        this.straat = straat;
        this.nr = nr;
        this.postcode = postcode;
        this.gemeente = gemeente;
        this.isMaatschappelijkeZetel = isMaatschappelijkeZetel;
        this.isFacturatieAdres = isFacturatieAdres;
    }
}