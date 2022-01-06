import { Component, forwardRef, Input, Output, EventEmitter, ElementRef} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Observable } from "rxjs";
import "rxjs/add/observable/fromEvent";


@Component({
    selector: "alert",
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AlertComponent), multi: true }
    ],
    template: `
        <div class="alert alert-warning alert-dismissible" role="alert"><i class="fa fa-warning" > </i>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            {{text}} 
            <strong *ngIf="strongtext">{{strongtext}}</strong>
        </div>
    `
})
export class AlertComponent {
    @Input() text: string = "";
    @Input() strongtext: string = "";
}