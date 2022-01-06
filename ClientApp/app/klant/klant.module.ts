import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ServiceModule } from "../services/service.module";
import { routes, klantComponents, klantDirectives, klantPipes } from "./klant.module.definitions"
import { KlantCoreModule } from "../componenten/klant-core";
import { KlantResolve } from "./klant.resolve";

@NgModule({
    imports: [
        ServiceModule,
        KlantCoreModule,
        RouterModule.forChild([...routes])
    ],
    providers: [
        KlantResolve
    ],
    declarations: [
        ...klantComponents
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KlantModule { }