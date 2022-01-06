import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ServiceModule } from "../services/service.module";
import { SharedModule } from "../shared/shared.module";
import { SearchModule } from "../componenten/search";
import { ValidatorsModule } from "../componenten/validators";
import { CodeSelectModule } from "../componenten/code-select";
import { LocatieSelectModule } from "../componenten/location-select";
import { DateTimePickerhModule } from "../componenten/datetimepicker";
import { MarktSelectModule } from "../componenten/markt-select";
import { DagpasFormModule } from "../componenten/dagpas-form";
import { routes, marktComponents, marktDirectives, marktPipes } from "./markt.module.definitions"
import { MarktResolve } from "./markt.resolve";
import { SlimLoadingBarModule, SlimLoadingBarService } from "ng2-slim-loading-bar";
import { KavelDetailModal } from "./kavel-detail.modal.component";
import { OndernemingService, DagpasService, TariefService } from "../services";
import { KlantCoreModule, KlantService } from "../componenten/klant-core";
import { DateTimeHelper } from "../shared/helper/datetimehelper";

@
NgModule({
    imports: [
        SharedModule,
        ServiceModule,
        SearchModule,
        CodeSelectModule,
        LocatieSelectModule,
        ValidatorsModule,
        DateTimePickerhModule,
        MarktSelectModule, 
        DagpasFormModule,
        RouterModule.forChild([...routes]),
        KlantCoreModule
    ],
    providers: [
        MarktResolve,
        OndernemingService,
        KlantService,
        DagpasService,
        TariefService,
        DateTimeHelper
    ],
    declarations: [
        ...marktComponents
    ],
    entryComponents: [KavelDetailModal, ...marktComponents],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MarktModule { }