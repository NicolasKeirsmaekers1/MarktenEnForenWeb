import { Component, forwardRef, Input, Output, EventEmitter, Optional, Inject } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, NG_VALIDATORS } from "@angular/forms";
import { OndernemingService } from "./onderneming.service";
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: "onderneming-select",
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => OndernemingSelectComponent), multi: true }
    ],
    template: `<search [(ngModel)]="value"(keypress)="validateOndernemingsnr(value)" (search)="searchOndernemingsnummer($event)"></search>`
})
export class OndernemingSelectComponent implements ControlValueAccessor {
    private _value: string = "";
    private propagateChange = (_: any) => { };

    @Output() onResult = new EventEmitter<any>();

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.propagateChange(this._value);
    };

    constructor(private ondernemingSvc: OndernemingService, private toastr: ToastrService) {

    }

    private validateOndernemingsnr(value) {
        if (value.length > 9) {
            return false;
        }
    }
    private searchOndernemingsnummer($event) {
        if (!$event || $event.value.length < 9) {
            this.toastr.warning("Ondernemingsnummer is te kort.", "Ongeldig ondernemingsnummer");
        }
        else {
            this.ondernemingSvc.search($event.value).subscribe(x => {
                this.onResult.emit(x);
            }, error => {
                this.toastr.error("Onderneming niet gevonden in het systeem.", "Onderneming niet gevonden");
                    if (error.ExtraInfo) {
                        for (let xtra in error.ExtraInfo) {
                            this.toastr.warning(error.ExtraInfo[xtra].join(","), xtra);
                        }
                    }

                this.onResult.emit(null);
            });
        }
    }

    writeValue(value: any): void {
        this.value = value || "";
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn): void { }

    validate() {
        console.log("test");
    }
}