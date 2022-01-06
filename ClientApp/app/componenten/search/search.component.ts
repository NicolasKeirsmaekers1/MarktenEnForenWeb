
import {fromEvent as observableFromEvent,  Observable } from 'rxjs';

import {distinctUntilChanged, debounceTime, map} from 'rxjs/operators';
import { Component, forwardRef, Input, Output, EventEmitter, ElementRef, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import "rxjs/add/observable/fromEvent";

@Component({
    selector: "search",
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SearchComponent), multi: true }
    ],
    template: `
            <div class="input-group">
                <input class="form-control" type="text" [value]="value" (input)="value = $event.target.value" (blur)="propagateTouched()" />
                <span class="input-group-btn">
                    <button class="btn btn-primary" type="button" (click)="searchClicked()"><i class="fa fa-search"></i></button>
                </span>
            </div>
            `
})
export class SearchComponent implements OnInit, ControlValueAccessor {
    private _value: string = "";
    private propagateChange = (_: any) => { };
    private propagateTouched = (_: any) => { };

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
        this.propagateChange(this._value);
    };

    @Input() delay: number = 2500;
    @Input() autoSearch: boolean = true;
    @Output() search = new EventEmitter();

    constructor(private element: ElementRef) {
    }

    ngOnInit(): void {
        if (this.autoSearch) {
            const eventStream = observableFromEvent(this.element.nativeElement, 'keyup').pipe(
                map(() => this.value),
                debounceTime(this.delay),
                distinctUntilChanged(),);

            eventStream.subscribe(input => {
                this.search.emit({
                    value: input
                });
            });
        }
    }

    searchClicked(): void {
        this.search.emit({
            value: this.value
        });
    }

    writeValue(value: any): void {
        if (value !== undefined) {
            this.value = value;
        }
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn): void {
        this.propagateTouched = fn;
    }

}