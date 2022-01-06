import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ViewContainerRef } from "@angular/core";
import { NullSafePipe } from "./null-safe.pipe";
import { StringFormatPipe } from "./stringFormatPipe.pipe";
import "./rxjs-operators";

@NgModule({
    declarations: [
        NullSafePipe,
        StringFormatPipe
    ],
    exports: [ 
        NullSafePipe,
        StringFormatPipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {
}