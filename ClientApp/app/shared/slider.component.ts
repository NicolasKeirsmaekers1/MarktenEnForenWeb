import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: "dp-slider",
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }
    ],
    template: `
        <span>
            <label>{{label}}</label>
            <label class="switch">
            
                <input [(ngModel)]="value" type="checkbox" [attr.disabled]="disabled ? true : null" [attr.checked]="value ? true : null"><i></i>
            </label>
        </span>
`
})
export class SliderComponent implements ControlValueAccessor  {
    private _value: boolean = false;
    private disabled: boolean = false;

    get value() {
        return this._value;
    }

    @Input()
    set value(val) {
        this._value = val;
        this.propagateChange(this._value);
    };

    @Input()label: string = "";

    propagateChange = (_: any) => { };

    writeValue(value: boolean): void {
        if (value !== undefined) {
            this.value = value;
        }
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void { }

    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }
}