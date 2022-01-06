import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AddressComponent } from "./app.address";
import { ContactPersoonComponent } from "./contactpersoon.component";
import { KlantDetailCoreComponent } from "./klant-detail.component";
import { OndernemingSelectComponent } from "./onderneming-select.component";
import { OndernemingService } from "./onderneming.service";
import { KlantService } from "./klant.service";

import { ValidatorsModule } from "../validators";
import { DocumentUploadModule } from "../document-upload";
import { BootstrapModule } from "../bootstrap";
import { SharedModule } from "../../shared";
import { SearchModule } from "../search";
import { CodeSelectModule } from "../code-select";

const components = [
    OndernemingSelectComponent, AddressComponent, ContactPersoonComponent, KlantDetailCoreComponent
];

const modules = [
    CommonModule,
    ReactiveFormsModule,
    CodeSelectModule,
    SearchModule,
    ValidatorsModule,
    DocumentUploadModule,
    BootstrapModule,
    SharedModule
];

@NgModule({
    declarations: components,
    imports: [...modules],
    providers: [KlantService, OndernemingService],
    exports: [...components, ...modules],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KlantCoreModule {
}
export * from "./app.address";
export * from "./contactpersoon.component";
export * from "./klant-detail.component";
export * from "./klant.service";
export * from "./onderneming.service";
export * from "./onderneming-select.component";
