import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ServiceModule } from "../services/service.module";
import { SharedModule } from "../shared/shared.module";
import { SearchModule } from "../componenten/search";
import { ValidatorsModule } from "../componenten/validators";
import { CodeSelectModule } from "../componenten/code-select";
import { DateTimePickerhModule } from "../componenten/datetimepicker";
import { routes, factuurComponents, factuurDirectives, factuurPipes } from "./factuur.module.definitions"
import { FactuurResolve } from "./factuur.resolve";
import { FactuurService } from "./factuur.service";
import { SlimLoadingBarModule, SlimLoadingBarService } from "ng2-slim-loading-bar";
import { FactuurDetailModal } from "./factuur-detail.modal.component";
import { DatePipe } from "@angular/common";

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
        FactuurService, FactuurResolve, DatePipe
    ],
    declarations: [
        ...factuurComponents
    ],
    entryComponents: [FactuurDetailModal, ...factuurComponents],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FactuurModule { }