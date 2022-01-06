﻿import { Component, forwardRef, Input, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { LocatieService } from "./locatie.service";
import { ILocatie } from "./locatie";

@Component({
    selector: "location-select",
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => LocationSelectComponent), multi: true }
    ],
    template: `
            <select class="form-control" [class.ajax-loading]="isLoading" [attr.disabled]="isLoading || disabled ? true : null" [(ngModel)]="value">
                <option value="" selected>{{placeholder}}</option>
                <option *ngFor="let item of data" [ngValue]="item.id">{{item.naam}}</option>
            </select>
            `,
    styles: [`.ajax-loading {    
                background-color: #ffffff;
                background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHdpZHRoPSc2NHB4JyBoZWlnaHQ9JzY0cHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLXJpbmciPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlLWRhc2hhcnJheT0iMTYzLjM2MjgxNzk4NjY2OTI2IDg3Ljk2NDU5NDMwMDUxNDIiIHN0cm9rZT0iI2QyNTM1MyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA1MCA1MDsxODAgNTAgNTA7MzYwIDUwIDUwOyIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMHMiPjwvYW5pbWF0ZVRyYW5zZm9ybT48L2NpcmNsZT48L3N2Zz4=);
                background-size: 25px 25px;
                background-position: right 25px center;
                background-repeat: no-repeat;
            }`]
})
export class LocationSelectComponent implements OnInit, OnChanges, ControlValueAccessor {
    private data: ILocatie[];
    private _value: string = "";
    private propagateChange: Function;
    private isLoading = true;
    private disabled = false;

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        if (this.propagateChange) this.propagateChange(this._value);
    };

    @Input() district: string;
    @Input() input: string;
    @Input() placeholder: string = "- maak uw keuze -";
    @Input() onBeforeRender: Function;

    constructor(private locatieSvc: LocatieService) {
    }

    ngOnInit(): void {
        this.getData();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["district"]) this.getData();
    }

    reload() {
        this.getData();
    }

    private getData(): void {
        this.isLoading = true;
        this.locatieSvc.getLocaties().subscribe(x => {
            const result = { data: [] };
            if (this.district) {
                const grouped = x.groupBy("districtCode");
                result.data = grouped[this.district];
            }
            else result.data = x;
            if (this.onBeforeRender) this.onBeforeRender(result);
            this.data = result.data;
            this.isLoading = false;
        }, x => this.isLoading = false);
    }

    writeValue(value: any): void {
        this.value = value || "";
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn): void { }

    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }
}

declare global {
    interface Array<T> {
        groupBy(key: string): any;
    }
}

Array.prototype.groupBy = function (key: string) {
    return this.reduce((rv, x) => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};