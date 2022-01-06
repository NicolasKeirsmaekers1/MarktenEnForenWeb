import { Component, Input, forwardRef, ViewChild, ElementRef, AfterViewInit, OnDestroy } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

import * as jQuery from 'jquery';
import 'bootstrap-datepicker';
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.nl-BE.min';

interface IDatePair {
    enabled: boolean;
    classes: string;
}
@Component({
    selector: "datepicker",
    styleUrls: ['./datepicker.component.scss'],
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DatePickerComponent), multi: true }
    ],
    template: `
            <div #input class="input-group date">
                <input type="text" class="form-control" onkeydown="event.preventDefault()" enableOnReadonly="true" [attr.placeholder]="placeholder" [attr.readonly]="disabled == true ? true : null">
                <div class="input-group-addon" [ngClass]="{'disabled': disabled}">
                    <span class="fa fa-calendar"></span>
                </div>
            </div>
            `
})
export class DatePickerComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
    private _jqElement: any;
    private _value: any = "";
    private propagateChange = (_: any) => { };
    @ViewChild('input', {static: false}) input: ElementRef;
    @Input() placeholder: string = "../../...";
    @Input() disabled: boolean = false;
    @Input() startDate: string = "";
    @Input() endDate: string = "";
    @Input('dates') enabledDates: Date[];
    datepair: IDatePair;
    ngAfterViewInit() {
        var today = new Date();
        var datepair: IDatePair = {
            enabled: true,
            classes: ""
        };
        var dates = this.enabledDates;
        this._jqElement = (<any>jQuery(this.input.nativeElement)).datepicker({

            language: "nl-BE",
            showMeridian: false,
            autoclose: true,
            assumeNearbyYear: true,
            startDate: this.startDate,
            endDate: this.endDate,
            format: 'dd/mm/yyyy',
            enableOnReadonly: false,
            beforeShowDay: function (date) {
                if (dates) {
                    datepair.enabled = dates.some(x => x.getDate() == date.getDate() && x.getMonth() == date.getMonth());
                    datepair.classes = "";
                }
               
                return datepair;
            }
        });
        if (this.value) this._jqElement.datepicker('setDate', this.formatDate(new Date(this.value)));
        this._jqElement.on("changeDate", (e) => {
            this.value = new Date(new Date(new Date(e.date).toString()).setHours(0));
        }).on("clearDate", (e: any) => {
            this.value = null;
        });
    }

    ngOnDestroy(): void {
        this._jqElement.datepicker('destroy');
    }

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.propagateChange(val);
    };

    private formatDate(date: Date): string {
        var day: any = date.getDate();
        var month: any = date.getMonth() + 1;
        var year = date.getFullYear();

        day = (day < 10 ? '0' : '') + day;
        month = (month < 10 ? '0' : '') + month;
        return `${day}/${month}/${year}`;
    }

    writeValue(value: any): void {
        if (value) {
            this.value = value;
            if (this._jqElement)
            {
                this._jqElement.datepicker('setDate', new Date(this.value));
            }
        } else if (value === "clear") {
            this._jqElement.datepicker('setDate', null);
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