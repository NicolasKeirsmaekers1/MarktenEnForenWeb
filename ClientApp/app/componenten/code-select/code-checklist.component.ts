//import { Component, forwardRef, Input, OnInit } from "@angular/core";
//import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
//import { CodeService, CodeType, ICode } from "./code.service";

//@Component({
//    selector: "code-checklist",
//    providers: [
//        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CodeCheckListComponent), multi: true }
//    ],
//    template: `
//            <div class="checkbox checkbox-list">
//                <ul style="list-style: none;">
//                    <li *ngFor="#option of data; #i = index"><label>
//                        <input [attr.name]="name" type="checkbox" [(ngModel)]="option.code">option.omschrijving</label>
//                    </li>
//                </ul>
//            </div>
//            `
//})
//export class CodeCheckListComponent implements OnInit, ControlValueAccessor {
//    private data: ICode[];
//    private _value: string;
//    private propagateChange = (_: any) => { };
//    name: string;

//    get value() {
//        return this._value;
//    }

//    set value(val) {
//        this._value = val;
//        this.propagateChange(this._value);
//    };
//    @Input() type: CodeType;
//    @Input() input: string;

//    constructor(private codeService: CodeService) {
//    }

//    ngOnInit(): void {
//        this.getData();
//    }

//    getData(): void {
//        this.codeService.getCodes(this.type).subscribe(x => this.data = x);
//    }

//    writeValue(value: any): void {
//        if (value !== undefined) {
//            this.value = value;
//            this.name = CodeType[value];
//        }
//    }

//    registerOnChange(fn: any): void {
//        this.propagateChange = fn;
//    }

//    registerOnTouched(fn): void {}

    
//}