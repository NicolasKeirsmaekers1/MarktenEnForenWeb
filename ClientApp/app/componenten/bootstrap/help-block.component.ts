import { Component, Input, forwardRef, ElementRef, OnInit } from "@angular/core";

@Component({
    selector: "help-block",
    template: `
<span class="help-block" *ngIf="visible">
        <ng-content></ng-content>
</span>
            `
})
export class HelpBlockComponent implements OnInit {
    ngOnInit(): void {
        this.visible = !this.type;
    }

    @Input() type: string; 
    @Input() visible: boolean = false; 
}