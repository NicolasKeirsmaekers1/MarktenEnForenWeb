﻿import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { IProduct, ProductService } from "./products.service";

@Component({
    selector: "product-select",
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ProductSelectComponent), multi: true }
    ],
    template: `
        <select id="intake-add-product-dropdown" class="form-control" [class.ajax-loading]="isLoading" [attr.disabled]="isLoading || disabled ? true : null" [(ngModel)]="value">
            <option value="" selected>{{placeholder}}</option>
            <option *ngFor="let product of producten" [ngValue]="product.id">{{product.omschrijving}}</option>
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
export class ProductSelectComponent implements OnInit, ControlValueAccessor {
    private isLoading = true;
    private producten: IProduct[];
    private _value: string = "";
    private propagateChange = (_: any) => { };

    @Input() placeholder: string = "- maak uw keuze -";

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.propagateChange(this._value);
    };

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.getData();
    }

    private getData(): void {
        this.productService.get().subscribe(x => {
            this.producten = x.sort(this.compareProducten);
            this.isLoading = false;
        });
    }

    writeValue(value: any): void {
        this.value = value || "";
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn): void { }

    compareProducten(a, b): number {
        if (a.omschrijving.toLowerCase() < b.omschrijving.toLowerCase() )
            return -1;
        if (a.omschrijving.toLowerCase()  > b.omschrijving.toLowerCase() )
            return 1;
        return 0;
    }
}