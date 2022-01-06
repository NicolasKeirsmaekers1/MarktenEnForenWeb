import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../../shared";
import { MarktPanelComponent } from "./markt-panel.component";
import { MarktDisplayComponent } from "./markt-display.component";
import { MarktService } from "./markt.service";
import { CodeSelectModule } from "../code-select";

@NgModule({
    declarations: [MarktPanelComponent, MarktDisplayComponent],
    imports: [CommonModule, FormsModule, SharedModule, CodeSelectModule],
    exports: [MarktPanelComponent, MarktDisplayComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarktSelectModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MarktSelectModule,
            providers: [MarktService]
        }
    }
}