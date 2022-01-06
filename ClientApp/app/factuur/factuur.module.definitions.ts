import { Route } from "@angular/router";
import { GenericFactuurComponent } from "./factuur-generic.component";
import { FactuurHistoriekComponent } from "./factuur-historiek.component";
import { FactuurResolve } from "./factuur.resolve";
import { AuthGuard, Privilege } from "../auth";
import { FactuurDetailModal } from "./factuur-detail.modal.component";

export const factuurComponents: any[] = [
    GenericFactuurComponent,
    FactuurHistoriekComponent,
    FactuurDetailModal
];

export const factuurDirectives: any[] = [];

export const factuurPipes: any[] = [];

export const routes: Route[] = [
    {
        path: "halfjaarlijkse",
        component: GenericFactuurComponent,
        canActivate: [AuthGuard],
        data: {
            privileges: [Privilege.Factuur.GetFilteredAndPaged]
        }
    },
    {
        path: "tussentijdse",
        component: GenericFactuurComponent,
        canActivate: [AuthGuard],
        data: {
            privileges: [Privilege.Factuur.GetFilteredAndPaged]
        }
    },
    {
        path: "terugbetalingen",
        component: GenericFactuurComponent,
        canActivate: [AuthGuard],
        data: {
            privileges: [Privilege.Factuur.GetFilteredAndPaged]
        }
    },
    {
        path: "historiek",
        component: FactuurHistoriekComponent,
        canActivate: [AuthGuard],
        data: {
            privileges: [Privilege.Factuur.GetFilteredAndPaged]
        }
    },
    {
        path: ":id",
        component: FactuurDetailModal,
        resolve: {
            Factuur: FactuurResolve
        },
        canActivate: [AuthGuard],
        data: {
            privileges: [Privilege.Factuur.Get]
        }
    }
];