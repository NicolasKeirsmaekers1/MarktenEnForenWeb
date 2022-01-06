import { NgModule } from "@angular/core";
import { KavelService } from "./kavel.service"
import { AbonnementService } from "./abonnement.service";

@NgModule({
    imports: [],
    exports: [],
    providers: [KavelService,  AbonnementService]
})
export class ServiceModule {
}