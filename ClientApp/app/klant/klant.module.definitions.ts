import { Route } from "@angular/router";
import { KlantDetailComponent } from "./klant-detail.component";
import { KlantOverviewComponent } from "./klant-overview.component";
import { KlantResolve } from "./klant.resolve";
import { AuthGuard, Privilege } from "../auth";

export const klantComponents: any[] = [
    KlantDetailComponent,
    KlantOverviewComponent
];

export const klantDirectives: any[] = [];

export const klantPipes: any[] = [];

export const routes: Route[] = [
    {
        path: "nieuw",
        component: KlantDetailComponent,
        canActivate: [AuthGuard],
        data: {
            privileges: [Privilege.Klant.Add]
        }
    },
    {
        path: "commercieel",
        component: KlantOverviewComponent,
        data: {
            commercieel: true,
            privileges: [Privilege.Klant.GetCommerciele]
        },
        canActivate: [AuthGuard]
    },
    {
        path: "nietcommercieel",
        component: KlantOverviewComponent,
        canActivate: [AuthGuard],
        data: {
            commercieel: false,
            privileges: [Privilege.Klant.GetNietCommerciele]
        }
    },
    {
        path: ":id",
        component: KlantDetailComponent,
        resolve: {
            klant: KlantResolve
        },
        canActivate: [AuthGuard],
        data: {
            privileges: [Privilege.Klant.Get]
        }
    },
    {
        path: "",
        redirectTo: "commercieel",
        canActivate: [AuthGuard],
        data: {
            privileges: [Privilege.Klant.GetCommerciele]
        }
    }
];