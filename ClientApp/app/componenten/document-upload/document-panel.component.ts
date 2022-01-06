import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormArray, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CodeService, CodeType, ICode } from "../code-select";
import { Observable } from "rxjs";

﻿@Component({
    selector: "dp-document-panel",
    template: `
           <mafo-panel selector="documenten" [collapsable]="true" [open]="true">
                <mafo-panel-heading>
                    <h5>
                        DOCUMENTEN
                    </h5>
                </mafo-panel-heading>
                <mafo-panel-body>
                    <div class="row">
                        <div class="col-md-6" *ngFor="let documentType of documentTypes">
                            <dp-document-upload [documentType]="documentType.code" [klantId]="klantId" [componentsDisabled]="componentsDisabled" (callbackFn)="getDocumenten(klantId)"></dp-document-upload>
                        </div>
                    </div>
                </mafo-panel-body>
            </mafo-panel>
            `
﻿})
﻿export class DocumentPanelComponent implements OnInit {
     @Input() klantId: number;
     @Input() componentsDisabled: boolean = false;
    documentTypes: ICode[];

    constructor(private fb: FormBuilder, private codeService: CodeService) {
    }

    ngOnInit(): void {
        this.codeService.getCodes(CodeType.Documenttype).subscribe(x=> this.documentTypes = x);
    }

}