import { Injectable } from "@angular/core";
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Injectable()
export class ValidatorService {
    valideFormGroup(group: FormGroup): void {
        this.iterateControls(group, (control: FormControl) => {
            if (control.enabled) {
                control.updateValueAndValidity();
                control.markAsTouched();
                control.markAsDirty();
            }
        });
    }

    resetValidation(group: FormGroup): void {
        this.iterateControls(group, (control: FormControl) => {
            if (control.enabled) {
                control.markAsUntouched();
                control.markAsPristine();
            }
        });
    }

    private iterateControls(group: FormGroup, controlAction: Function) {
        for (let key in group.controls) {
            const control: any = group.controls[key];
            if (control.controls) {
                this.iterateControls(control, controlAction);
            }
            else {
                controlAction.apply(this, [control]);
            }
        }
    }
}