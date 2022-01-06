import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DatePickerComponent } from "./datepicker.component";
import { TimePickerComponent } from "./timepicker.component";

@NgModule({
    declarations: [
        DatePickerComponent,
        TimePickerComponent
    ],
    imports: [CommonModule, FormsModule],
    exports: [DatePickerComponent, TimePickerComponent]

})
export class DateTimePickerhModule {
}