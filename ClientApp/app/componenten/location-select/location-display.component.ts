import { Component, Input } from "@angular/core";
import { LocatieService } from "./locatie.service";
import { ILocatie } from "./locatie";

@Component({
    selector: "location-display",
    template: `
            <span>{{selected}}</span>
            `
})
export class LocationDisplayComponent {
    private selected: string;
    private _value: number;

    get value() : number {
        return this._value;
    }

    @Input() 
    set value(val: number) {
        if (this._value === val) return;
        this._value = val;
        this.locatieSvc.getLocaties().subscribe(codes => {
            var items = codes.filter((x: ILocatie) => x.id === val);
            this.selected = items.length > 0 ? items[0].naam : "";
        });
    };

    constructor(private locatieSvc: LocatieService) {} 
}