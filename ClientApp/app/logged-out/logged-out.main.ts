import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injectable } from "@angular/core";
import { LoggedOutComponent } from "./logged-out.component";
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoggedOutComponent],
    exports: [RouterModule, LoggedOutComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoggedOutModule {
}