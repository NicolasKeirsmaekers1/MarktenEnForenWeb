import { Component, forwardRef, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

import * as jQuery from 'jquery';
import 'bootstrap-timepicker/js/bootstrap-timepicker.min';


@Component({
    selector: "timepicker",
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TimePickerComponent), multi: true }
    ],
    template: `
            <div class="input-group bootstrap-timepicker timepicker">
                <input #input class="form-control" type="text" [attr.disabled]="disabled" />
                <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
            </div>
            `,
    queries: {
        vc: new ViewChild('input', {static: false})
    }
})
export class TimePickerComponent implements ControlValueAccessor, AfterViewInit {
    private _jqElement: any;
    private _value: any = "";
    private disabled?: boolean = null;
    private propagateChange = (_: any) => { };
    private _regex = /P(T(([0-9]*\.?[0-9]*)H)?(([0-9]*\.?[0-9]*)M)?(([0-9]*\.?[0-9]*)S)?)/;

    @ViewChild('input', {static: false}) input: ElementRef;

    ngAfterViewInit() {
        this._jqElement = (<any>jQuery(this.input.nativeElement)).timepicker({
            showMeridian: false,
            minuteStep: 1,
            defaultTime: false
        });
        if (this.value) this._jqElement.timepicker('setTime', this.value);
        this._jqElement.on('changeTime.timepicker', (e: any) => {
            var newValue = `${e.time.hours}:${e.time.minutes}`;
            this.propagateChange(newValue);
        });
    }

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.propagateChange(val);
    };

    writeValue(value: any): void {
        if (value) {
            this.value = value;
            if (this._jqElement) this._jqElement.timepicker('setTime', this.value);
        }
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn): void { }

    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled ? true : null;
    }
}