import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { CsvExportComponent }   from "./rapportage-csv-export.component";
import { RapportageService } from "./rapportage.service";
import { AuthGuard, Privilege } from "../auth";


@NgModule({
    imports: [SharedModule,
        RouterModule.forChild([
            {
                path: "csv-export",
                component: CsvExportComponent,
                data: {
                    privileges: [Privilege.Rapportage.Get]
                }
            }])
    ],
    declarations: [CsvExportComponent],
    providers: [RapportageService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RapportageModule { }