import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FileUploadComponent } from "./file-upload.component";

@NgModule({
    declarations: [
        FileUploadComponent
    ],
    imports: [CommonModule, FormsModule],
    exports: [FileUploadComponent]

})
export class FileUploadModule {
}

export * from "./file-upload.component";
