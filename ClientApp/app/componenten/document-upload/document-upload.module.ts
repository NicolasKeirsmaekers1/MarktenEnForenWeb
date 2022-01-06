import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared";
import { DocumentUploadComponent } from "./document-upload.component";
import { DocumentPanelComponent } from "./document-panel.component";
import { CodeSelectModule } from "../code-select";
import { DateTimePickerhModule } from "../datetimepicker";
import { DocumentService } from "./document.service";

@NgModule({
    declarations: [
        DocumentUploadComponent, DocumentPanelComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        CodeSelectModule,
        DateTimePickerhModule
    ],
    exports: [
        DocumentUploadComponent, DocumentPanelComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DocumentUploadModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DocumentUploadModule,
            providers: [DocumentService]
        }
    }
}