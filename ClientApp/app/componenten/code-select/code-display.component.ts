import { Component, Input } from "@angular/core";
import { CodeService, CodeType, ICode } from "./code.service";

@Component({
    selector: "code-display",
    template: `
            <span>{{selected}}</span>
            `
})
export class CodeDisplayComponent {
    private selected: string;
    private _value: string;

    @Input() type: CodeType | string;

    get value() {
        return this._value;
    }

    @Input() 
    set value(val) {
        if (this._value === val) return;
        this._value = val;
        this.codeService.getCodes(this.type).subscribe(codes => {
            var items = codes.filter((x: ICode) => x.code === val);
            this.selected = items.length > 0 ? items[0].omschrijving : "";
        });
    };

    constructor(private codeService: CodeService) {} 
}