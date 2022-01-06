import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { EmailValidator } from './email.validator';
import { ValidatorService } from "./validator.service";

@NgModule({
    declarations: [
        EmailValidator
    ],
    providers: [ValidatorService],
    imports: [FormsModule],
    exports: [EmailValidator]
})
export class ValidatorsModule {

}