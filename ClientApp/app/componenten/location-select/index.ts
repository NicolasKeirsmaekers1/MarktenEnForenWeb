import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LocationSelectComponent } from "./location-select.component";
import { LocationDistrictIdSelectComponent } from "./location-districtid-select.component";
import { LocationDisplayComponent } from "./location-display.component";
import { LocatieService } from "./locatie.service";

@NgModule({
    declarations: [
        LocationSelectComponent, LocationDistrictIdSelectComponent, LocationDisplayComponent
    ],
    imports: [CommonModule, FormsModule],
    exports: [LocationSelectComponent, LocationDistrictIdSelectComponent, LocationDisplayComponent]

})
export class LocatieSelectModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LocatieSelectModule,
            providers: [LocatieService]
        }
    }
}

export * from "./locatie.service";
export * from "./location-select.component";
export * from "./location-districtid-select.component";
export * from "./location-display.component";