import { Directive, forwardRef  } from "@angular/core";
import { NG_VALIDATORS, FormControl, ValidatorFn } from '@angular/forms';

@Directive({
    selector: '[validEmail][ngModel],[validEmail][formControl]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator), multi: true }
    ]
})
export class EmailValidator {
    validator: ValidatorFn;

    constructor() {
        this.validator = validateEmailFactory();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }
}

function validateEmailFactory(): ValidatorFn {
    return (c: FormControl) => {
        let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !c.value || EMAIL_REGEXP.test(c.value) ? null : {
            validEmail: {
                valid: false
            }
        };
    };
}