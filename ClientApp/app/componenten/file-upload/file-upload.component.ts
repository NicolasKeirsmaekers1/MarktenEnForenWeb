import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ContentChild, TemplateRef, QueryList } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

@Component({
    selector: "file-upload",
    template: `
            <input [attr.id]="name" [attr.name]="name" type="file" [attr.multiple]="multiple ? 'multiple' : null" class="inputfile" (change)="filesChanged($event)" />
            <label [attr.for]="name">
                <ng-template [ngTemplateOutlet]="fileTemplate" [ngTemplateOutletContext]="{ files: files }">
                </ng-template>
            </label>
            `,
    styles: [`
        .inputfile {
	        width: 0.1px;
	        height: 0.1px;
	        opacity: 0;
	        overflow: hidden;
	        position: absolute;
	        z-index: -1;
        }

        .inputfile + label {
	        cursor: pointer;
            display: block;
            margin-bottom: 0;
            font-weight: normal;
        }
    `]
})
export class FileUploadComponent implements OnInit {
    @ContentChild(TemplateRef, {static: false}) fileTemplate: QueryList<TemplateRef<any>>;
    @Input() multiple: boolean = false;
    @Input() name: string;
    @Output() fileChange = new EventEmitter<any>();

    private files: File[] = [];

    ngOnInit(): void {
        if (!this.name) throw new Error("name is a required setting for file-upload");
    }

    filesChanged($event): void {
        if (this.fileChange.observers.length > 0) {
            this.files = $event.target.files;
            this.fileChange.emit({
                name: this.name,
                files: this.files
            });
        }
    }
}