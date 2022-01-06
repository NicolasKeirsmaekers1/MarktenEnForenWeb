import { Component, Input } from "@angular/core";
import { IProduct, ProductService } from "./products.service";

@Component({
    selector: "product-display",
    template: `
            <span>{{selected}}</span>
            `
})
export class ProductDisplayComponent {
    private selected: string;
    private _value: number;

    get value() {
        return this._value;
    }

    @Input() 
    set value(val: number) {
        if (this._value === val) return;
        this._value = val;
        this.productService.get().subscribe(codes => {
            var items = codes.filter((x: IProduct) => x.id === val);
            this.selected = items.length > 0 ? items[0].omschrijving : "";
        });
    };

    constructor(private productService: ProductService) {} 
}