import { Component, Input, forwardRef, OnInit, OnChanges } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from "@angular/forms";

@Component({
    selector: "quantity-selector",
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => QuantitySelectorComponent), multi: true },
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => QuantitySelectorComponent), multi: true }
    ],
    template: `
    <div class="input-group">
        <span class="input-group-btn" >
            <button type="button" class="btn btn-primary" (click)="decrement()" [attr.disabled]="readonly || value <= min ? true : null">
                <i class="fa fa-minus" > </i>
            </button>
        </span>
        <input type= "number" class="form-control" [(ngModel)]="value" [attr.readonly]="readonly" />
        <span class="input-group-btn" >
            <button type="button" class="btn btn-primary" (click)="increment()" [attr.disabled]="readonly || value >= max ? true : null">
                <i class="fa fa-plus"> </i>
            </button>
        </span>
    </div>
`
})
export class QuantitySelectorComponent implements ControlValueAccessor, OnInit, OnChanges  {
    private _value = 0;
    private isValid: boolean = true;
    private disabled: boolean = false;

    @Input() max: number = Number.MAX_VALUE;
    @Input() min: number = Number.MIN_VALUE;
    @Input() readonly: boolean = false;
    @Input()
    set value(val) {
        this._value = val;
        this.propagateChange(this._value);
    };
    get value() {
        return this._value;
    }
    propagateChange = (_: any) => { };
    validateFn: Function = () => { };

    ngOnInit() {
        this.validateFn = rangeValidator(this.min, this.max);
        if (this.readonly === false) {
            this.readonly = null;
        }
    }

    ngOnChanges(inputs: any) {
        if (inputs.max || inputs.min) {
            this.validateFn = rangeValidator(this.min, this.max);
        }
    }

    increment() {
        this.value++;
    };

    decrement() {
        this.value--;
    };

    writeValue(value: any): void {
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

    validate(c: FormControl) {
        return this.validateFn(c);
    }
}

export function rangeValidator(min: number, max: number) {
    return (c: FormControl) => {
        let err = {
            rangeValidator: {
                valid: false,
                given: c.value,
                max: max || Number.MAX_VALUE,
                min: min || Number.MIN_VALUE
            }
        };

        return (c.value > +max || c.value < +min) ? err : null;
    }
}