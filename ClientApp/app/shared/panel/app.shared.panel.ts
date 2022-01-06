import { Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef} from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: "mafo-panel",
    templateUrl: "./app.shared.panel.layout.html",
    styleUrls: ["./app.shared.panel.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MafoPanelComponent {
    private _firstRun: boolean = true;
    private _open: boolean = true;

    @Input() selector: string = new Date().getUTCMilliseconds().toString();
    @Input() collapsable: boolean = false;
    @Input() padding: boolean = true;
    @Input() loading: boolean = false;
    @Input() open: boolean = true;
    @ViewChild("panelHeader", {static: true}) header: ElementRef;
    @ViewChild("panelActions", {static: true}) actions: ElementRef;
    @ViewChild("panelBody", {static: true}) body: ElementRef;
    @ViewChild("panelFooter", {static: true}) footer: ElementRef;

    showHeader: boolean = false;
    showActions: boolean = false;
    showBody: boolean = false;
    showFooter: boolean = false;

    ngAfterContentInit() {
        this.showHeader = this.header.nativeElement.children.length > 0;
        this.showActions = this.actions.nativeElement.children.length > 0;
        this.showBody = this.body.nativeElement.children.length > 0;
        this.showFooter = this.footer.nativeElement.children.length > 0 && this.footer.nativeElement.children[0].children.length > 0;
    }

    setPanelClasses():any {
        let classes = {
            'panel-collapse': this.collapsable,
            //'panel-body': this.padding,
            'collapse': this.collapsable,
            'in': this.open
        };
        return classes;
    }
}