import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FormGroupComponent } from "./form-group.component";
import { FormRadioComponent } from "./form-radio.component";
import { FormCheckboxComponent } from "./form-checkbox.component";
import { HelpBlockComponent } from "./help-block.component";

@NgModule({
    declarations: [
        FormGroupComponent,
        FormRadioComponent,
        FormCheckboxComponent,
        HelpBlockComponent
    ],
    imports: [CommonModule, FormsModule],
    exports: [FormGroupComponent, FormRadioComponent, FormCheckboxComponent, HelpBlockComponent]

})
export class BootstrapModule {
}