export * from "./validators.module";
export * from "./validator.service";
import { EmailValidator } from "./email.validator";
import { DateBeforeValidator } from "./date.validator";
import { DateAfterValidator } from "./date.validator";
import { ValidatorFn, FormGroup} from "@angular/forms";

export class CustomValidators {

    static get validEmail(): any {
        return new EmailValidator();
    }

    static dateBefore(thisControl: string, thanControlName: string): any {
        return DateBeforeValidator.validateDateBeforeFactory(thisControl, thanControlName);
    }

    static dateAfter(thisControl: string, thanControlName: string): any {
        return DateAfterValidator.validateDateAfterFactory(thisControl, thanControlName);
    }
}
