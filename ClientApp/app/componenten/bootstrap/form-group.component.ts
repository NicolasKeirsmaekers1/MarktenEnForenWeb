import { Directive, Component, Input, QueryList, ElementRef, Renderer2, AfterContentInit, OnDestroy, ContentChild, ContentChildren, SimpleChanges } from "@angular/core";
import { HelpBlockComponent } from "./help-block.component";
import { NgControl } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
    selector: "form-group",
    template: `
<div class="form-group" [ngClass]="displayValidation()"> 
    <label class="control-label" *ngIf="label">{{label}}</label>        
    <ng-content></ng-content>
</div>
            `
})
export class FormGroupComponent implements AfterContentInit, OnDestroy {
    private _subscribtion: Subscription;
    private _listen: Function;

    @Input() label: string;
    @ContentChildren(HelpBlockComponent) messages: QueryList<HelpBlockComponent>;
    //@ContentChild(forwardRef(() => NgControl)) input: InputDirective; //this way you can access directives
    @ContentChild(NgControl , {static: false}) input: NgControl;
    @ContentChild(NgControl, { read: ElementRef, static: false }) inputRef: ElementRef;

    constructor(private renderer: Renderer2) { }

    ngAfterContentInit() {
        if (this.input) {
            this._subscribtion = this.input.statusChanges.subscribe(this.renderMessages);
        }
        if (this.inputRef) {
            this._listen = this.renderer.listen(this.inputRef.nativeElement, "blur", this.renderMessages);
        }
    }

    ngAfterContentChecked() {
        // contentChild is updated after the content has been checked
        if (this.input && !this._subscribtion) {
            this._subscribtion = this.input.statusChanges.subscribe(this.renderMessages);
        }
        if (this.inputRef && !this._listen) {
            this._listen = this.renderer.listen(this.inputRef.nativeElement, "blur", this.renderMessages);
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
        const canValidate = this.input && this.input.control && (this.input.control.validator || this.input.control.asyncValidator);
        return {
            'has-error': canValidate && this.input.invalid && (this.input.touched || this.input.dirty),
            'has-success': canValidate && this.input.value && this.input.valid && this.input.dirty
        }
    }

    ngOnDestroy(): void {
        if (this._subscribtion) this._subscribtion.unsubscribe();
    }
}


//@Directive({
//    selector: 'input,textarea,select',
//    exportAs: 'inputdirective',
//    host: {
//        '[style.background-color]': '"yellow"'
//    }
//})
//export class InputDirective {
//    constructor(public element: ElementRef) {
//    }

//    ngOnChanges(): void {
//        // ngOnChanges() can observe only properties defined from @Input Decorator...
//    }
//}