import { Component, Input, QueryList, ElementRef, Renderer2, AfterContentInit, OnDestroy, ContentChild, ContentChildren } from "@angular/core";
import { HelpBlockComponent } from "./help-block.component";
import { NgControl } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
    selector: "form-checkbox",
    template: `
<div class="checkbox" [ngClass]="displayValidation()"> 
    <label>
        <ng-content></ng-content>
        {{label}}
    </label>
</div>
            `
})
export class FormCheckboxComponent implements AfterContentInit, OnDestroy {
    private _subscribtion: Subscription;

    @Input() label: string;
    @ContentChildren(HelpBlockComponent) messages: QueryList<HelpBlockComponent>;
    @ContentChild(NgControl , {static: false}) input: NgControl;
    @ContentChild(NgControl, { read: ElementRef, static: false }) inputRef: ElementRef;

    constructor(private renderer: Renderer2) { }

    ngAfterContentInit() {
        if (this.input) {
            this._subscribtion = this.input.statusChanges.subscribe(this.renderMessages);
        }
        if (this.inputRef) {
            this.renderer.listen(this.inputRef.nativeElement, "blur", this.renderMessages);
        }
    }

    renderMessages = () => {
        if (this.messages && this.messages.length > 0) {
            this.messages.forEach(message => {
                if (!message.type) message.visible = true;
                else if (this.input.valid || this.input.disabled) message.visible = false;
                else if (this.input.errors) message.visible = this.input.errors[message.type.toLowerCase()] !== undefined;
                else message.visible = false;
            });
            this.input.control.markAsTouched({ onlySelf: true });
        }
    }

    displayValidation(): any {
        return {
            'has-error': this.messages && this.messages.length > 0 && this.input && this.input.invalid && (this.input.touched || this.input.dirty),
            'has-success': this.messages && this.messages.length > 0 && this.input && this.input.value && this.input.valid && this.input.dirty
        }
    }

    ngOnDestroy(): void {
        if (this._subscribtion) this._subscribtion.unsubscribe();
    }
}