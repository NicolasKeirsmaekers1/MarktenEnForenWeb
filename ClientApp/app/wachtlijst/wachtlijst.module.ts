import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CommonModule, DatePipe } from "@angular/common";
import { ServiceModule } from "../services";
import { RouterModule } from "@angular/router";
import { routes, wachtlijstComponents, wachtlijstDirectives, wachtlijstPipes } from "./wachtlijst.module.definitions"
import { SearchModule } from "../componenten/search";
import { CodeSelectModule } from "../componenten/code-select";
import { WachtlijstResolve } from "./wachtlijst.resolve";
import { IntakeService } from "../services/intake.service";
import { KlantService } from "../componenten/klant-core";
import { KlantResolve } from "../klant/klant.resolve";
import { AanvraagWeigeringService } from "../services/aanvraag-weigering.service";
import { AanvraagService } from "../services/aanvraag.service";
import { AanvraagMarktService } from "../services/aanvraag-markt.service";
import { ProductSelectModule } from "../componenten/product-select";
import { DateTimePickerhModule } from "../componenten/datetimepicker";
import { AlertModule } from "../componenten/alert/alert.module";
import { AuthGuard } from "../auth";
import { DocumentUploadModule } from "../componenten/document-upload";
import { DateTimeHelper } from "../shared/helper/datetimehelper";
import { MarktSelectModule, MarktService } from "../componenten/markt-select";
import { MarktResolve } from "../markt/markt.resolve";
import { LocatieSelectModule } from "../componenten/location-select";
import { ValidatorsModule } from "../componenten/validators";
import { MarktWachtlijstService } from "../services/markt-wachtlijst.service";

@NgModule({
    imports: [
        SharedModule,
        ServiceModule,
        CommonModule,
        SearchModule,
        CodeSelectModule,
        ProductSelectModule,
        DateTimePickerhModule,
        AlertModule,
        DocumentUploadModule,
        RouterModule.forChild([...routes]),
        MarktSelectModule,
        LocatieSelectModule,
        ValidatorsModule
    ],
    providers: [
        WachtlijstResolve,
        IntakeService,
        KlantService,
        MarktService, ,
        MarktWachtlijstService,
        KlantResolve,
        AanvraagWeigeringService,
        DatePipe,
        AanvraagService,
        AanvraagMarktService,
        AuthGuard,
        DateTimeHelper,
        MarktResolve
    ],
    declarations:
    [
        ...wachtlijstComponents
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WachtlijstModule { } 