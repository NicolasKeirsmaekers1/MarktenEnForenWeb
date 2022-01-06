import { Route } from "@angular/router";
import { KlantComponent } from "./klant.component";
import { StandplaatsComponent } from "./standplaats.component";
import { DieptekavelsComponent } from "./dieptekavels.component";
import { DieptekavelsHistoriekComponent } from "./dieptekavels-historiek.component";
import { StatusComponent } from "./status.component";
import { ElektriciteitComponent } from "./elektriciteit.component";
import { ElektriciteitHistoriekComponent } from "./elektriciteit-historiek.component";
import { HuidigAbonnementComponent } from "./abonnement-huidig.component";
import { AbonnementDetailComponent } from "./abonnement-detail.component";
import { AbonnementResolve } from "./abonnement.resolve";
import { AuthGuard, Privilege } from "../auth";

export const abonnementComponents: any[] = [
    KlantComponent,
    StandplaatsComponent,
    DieptekavelsComponent,
    DieptekavelsHistoriekComponent,
    StatusComponent,
    ElektriciteitComponent,
    ElektriciteitHistoriekComponent,
    HuidigAbonnementComponent,
    AbonnementDetailComponent,
];

export const abonnementDirectives: any[] = [];

export const abonnementPipes: any[] = [];

export const routes: Route[] = [
    {
        path: "huidig",
        component: HuidigAbonnementComponent,
        canActivate: [AuthGuard],
        data: {
            privileges: [Privilege.Abonnement.GetAllFilteredAndPaged]
        }
    },
    {
        path: ":id",
        component: AbonnementDetailComponent,
        resolve: {
            abonnement: AbonnementResolve
        },
        canActivate: [AuthGuard],
        data: {
            privileges: [Privilege.Abonnement.Get]
        }
    }
];