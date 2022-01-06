import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { ServiceModule } from "../services";
import { RouterModule } from "@angular/router";
import { routes, abonnementComponents, abonnementDirectives, abonnementPipes } from "./abonnement.module.definitions"
import { AbonnementElektriciteitWijzigingService } from "../services/abonnement-elektriciteit-wijziging.service";
import { AbonnementDieptekavelsWijzigingService } from "../services/abonnement-dieptekavels-wijziging.service";
import { SearchModule } from "../componenten/search";
import { CodeSelectModule } from "../componenten/code-select";
import { AbonnementResolve } from "./abonnement.resolve";
import { DatePipe } from '@angular/common'; 
import { DateTimePickerhModule } from "../componenten/datetimepicker";
import { NullSafePipe } from '../core/null-safe.pipe';
import { ProductSelectModule } from "../componenten/product-select";
import { ValidatorsModule } from "../componenten/validators";
import { FileUploadModule } from "../componenten/file-upload";
import { KlantCoreModule } from "../componenten/klant-core";

@NgModule({
    imports: [
        SharedModule,
        ServiceModule,
        CommonModule,
        SearchModule,
        CodeSelectModule,
        DateTimePickerhModule,
        ProductSelectModule,
        ValidatorsModule,
        FileUploadModule,
        KlantCoreModule,
        RouterModule.forChild([...routes])
    ],
    providers: [
        AbonnementResolve,
        AbonnementElektriciteitWijzigingService,
        AbonnementDieptekavelsWijzigingService,
        DatePipe,
        NullSafePipe
    ],
    declarations:
    [
        ...abonnementComponents
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AbonnementModule { } 