import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ServiceModule } from "../services/service.module";
import { SharedModule } from "../shared/shared.module";
import { SearchModule } from "../componenten/search";
import { ValidatorsModule } from "../componenten/validators";
import { CodeSelectModule } from "../componenten/code-select";
import { DateTimePickerhModule } from "../componenten/datetimepicker";
import { routes, beheerComponents, beheerDirectives, beheerPipes } from "./beheer.module.definitions";
import { SlimLoadingBarModule, SlimLoadingBarService } from "ng2-slim-loading-bar";
import { TariefService, ProductService } from "../services";
import {LocatieService} from "../componenten/location-select/locatie.service";

@NgModule({
    imports: [
        SharedModule,
        ServiceModule,
        SearchModule,
        CodeSelectModule,
        ValidatorsModule,
        DateTimePickerhModule,
        RouterModule.forChild([...routes])
    ],
    providers: [
        TariefService,
        ProductService,
        LocatieService,
        ProductService
        ],
    declarations: [
        ...beheerComponents
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BeheerModule { }