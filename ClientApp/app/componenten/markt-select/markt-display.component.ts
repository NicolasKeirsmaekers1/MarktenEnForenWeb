import { Component, Input } from "@angular/core";
import { MarktService} from "./markt.service";
import { IMarktDetail } from "./markt";

@Component({
    selector: "markt-display",
    template: `
            <span>{{selected}}</span>
            `
})
export class MarktDisplayComponent {
    private selected: string;
    private _value: number;

    get value(): number {
        return this._value;
    }

    @Input() 
    set value(val: number) {
        if (this._value === val) return;
        this._value = val;
        this.marktSvc.get(this._value).subscribe((markt: IMarktDetail) => {
            this.selected = `${markt.naam} (${markt.afkorting})`;
        });
    };

    constructor(private marktSvc: MarktService) {} 
}