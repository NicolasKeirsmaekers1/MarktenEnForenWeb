import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { DocumentService, IDocument } from "./document.service";
import { CodeType } from '../code-select';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'dp-document-upload',
    styleUrls: ["./document-upload.component.scss"],
    templateUrl: './document-upload.layout.html'
})
export class DocumentUploadComponent implements OnInit {
    @Input() klantId: number;
    @Input() documentType: string;
    @Input() required: boolean = false;
    @Input() abonnementStatusWijzigingId: number = null;
    @Input() componentsDisabled: boolean = false;
    @Output() callbackFn: EventEmitter<any> = new EventEmitter();

    private document: IDocument = {
        documentTypeCode: "OVERIGE",
        naam: "",
        fileExtension: "",
        bestand: null,
        klantId: 0,
        geldigVan: null,
        geldigTot: null
    }

    constructor(private documentService: DocumentService, private toastr: ToastrService) {
    }

    ngOnInit(): void {
        if (this.klantId && this.documentType) {
            this.documentService.get(this.documentType, this.klantId, this.abonnementStatusWijzigingId)
                .subscribe(
                    (document) => {
                        if (document) {
                            this.document = document;
                        }
                    },
                    x => {
                    });
        }
    }

    fileChange(event): void {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let fileContent: any;
            let reader = new FileReader();

            reader.onload = (e: any) => {
                let binaryString = e.target.result;
                fileContent = btoa(binaryString);
                let fileName: string = file.name.substr(0, file.name.lastIndexOf("."));
                let fileExtension: string = file.name.substr(file.name.lastIndexOf("."), file.name.length);
                this.document.naam = fileName;
                this.document.fileExtension = fileExtension;
                this.document.bestand = fileContent;
                this.document.klantId = this.klantId;
                this.document.abonnementStatusWijzigingId = this.abonnementStatusWijzigingId;
                this.document.documentTypeCode = this.documentType;
            };

            reader.onloadend = (e: Event) => {
                this.documentService.saveDocument(this.document).subscribe(x => {
                    this.document = x;
                    this.callbackFn.emit();
                },
                    (x) => {
                        if (x.ExtraInfo) {
                            for (let xtra in x.ExtraInfo) {
                                this.toastr.warning(xtra, x.ExtraInfo[xtra].join(","));
                            }
                        }
                        this.toastr.error("Kon document niet opslaan.", "Documenten");
                    });
            }

            reader.readAsBinaryString(file);
        }
    }
    downloadFile($event: Event): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.documentService.downloadDocument(this.documentType, this.klantId, this.abonnementStatusWijzigingId);
    }
}

interface FileReaderEventTarget extends EventTarget {
    result: string
}

interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage(): string;
}