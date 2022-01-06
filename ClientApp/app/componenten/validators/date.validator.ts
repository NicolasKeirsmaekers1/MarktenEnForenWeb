import { Directive, forwardRef } from "@angular/core";
import { NG_VALIDATORS, FormControl, ValidatorFn, FormGroup, AbstractControl } from '@angular/forms';

@Directive({
    selector: '[dateAfter][ngModel],[dateAfter][formControl]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => DateAfterValidator), multi: true }
    ]
})
export class DateAfterValidator {
    validator: ValidatorFn;

    constructor(thisControl: string, thanControlName: string) {
        this.validator = DateAfterValidator.validateDateAfterFactory(thisControl, thanControlName);
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

    public static validateDateAfterFactory(thisControl: string, thanControlName: string): ValidatorFn {
        return (group: FormGroup): { [key: string]: any } => {
            const dateCtrl = group.controls[thisControl];
            const thanCtrl = group.controls[thanControlName];
            const startDateTimestamp = Date.parse(thanCtrl.value);
            const endDateTimestamp = Date.parse(dateCtrl.value);
            const result = (endDateTimestamp < startDateTimestamp) ? { dateAfter: { valid: false } } : null;
            if (result) {
                dateCtrl.setErrors(result);
                dateCtrl.updateValueAndValidity({ onlySelf: true });
            }
            return result;
        }
    }
}

@Directive({
    selector: '[dateBefore][ngModel],[dateBefore][formControl]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => DateBeforeValidator), multi: true }
    ]
})
export class DateBeforeValidator {
    validator: ValidatorFn;

    constructor(thisControl: string, thanControlName: string) {
        this.validator = DateBeforeValidator.validateDateBeforeFactory(thisControl, thanControlName);
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

    public static validateDateBeforeFactory(thisControl: string, thanControlName: string): ValidatorFn {
        return (group: FormGroup): { [key: string]: any } => {
            const dateCtrl = group.controls[thisControl];
            const thanCtrl = group.controls[thanControlName];
            const startDateTimestamp = Date.parse(thanCtrl.value);
            const endDateTimestamp = Date.parse(dateCtrl.value);
            const result = (endDateTimestamp > startDateTimestamp) ? { dateBefore: { valid: false } } : null;
            if (result) {
                dateCtrl.setErrors(result);
                dateCtrl.updateValueAndValidity({ onlySelf: true });
            }
            return result;
        }
    }
}