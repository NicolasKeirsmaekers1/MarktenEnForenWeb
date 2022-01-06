import { Route } from "@angular/router";
import { MarktBeheerComponent } from "./markt-beheer.component";
import { MarktBoekjeOverviewComponent } from "./markt-boekje-overview.component";
import { MarktBoekjeDetailComponent } from "./markt-boekje-detail.component";
import { MarktBewerkenComponent } from "./markt-bewerken.component";
import { MarktResolve } from "./markt.resolve";
import { KavelDetailModal } from "./kavel-detail.modal.component";
import { AuthGuard, Privilege } from "../auth";

export const marktComponents: any[] = [
    MarktBeheerComponent,
    MarktBoekjeOverviewComponent,
    MarktBoekjeDetailComponent,
    MarktBewerkenComponent,
    KavelDetailModal
];

export const marktDirectives: any[] = [];

export const marktPipes: any[] = [];

export const routes: Route[] = [
    {
        path: "beheer",
        component: MarktBeheerComponent,
        canActivate: [AuthGuard],
        data: {
            privileges: [Privilege.Markt.GetAllFilteredAndPaged]
        }
    },
    {
        path: "boekje",
        children: [
            {
                path: "",
                component: MarktBoekjeOverviewComponent,
                canActivate: [AuthGuard],
                data: {
                    privileges: [Privilege.Markt.GetMarktBoekjes]
                }
            },
            {
                path: ":marktId",
                component: MarktBoekjeDetailComponent,
                canActivate: [AuthGuard],
                data: {
                    privileges: [Privilege.Markt.Get]
                }
            }
        ]
    },
    {
        path: "nieuw",
        component: MarktBewerkenComponent,
        canActivate: [AuthGuard],
        data: {
            privileges: [Privilege.Markt.Add]
        }
    },
    {
        path: ":id",
        component: MarktBewerkenComponent,
        resolve: {
            markt: MarktResolve
        },
        canActivate: [AuthGuard],
        data: {
            privileges: [Privilege.Markt.Get]
        }
    },
    {
        path: "dagpassen",
        component: MarktBoekjeDetailComponent,
        resolve: {
            markt: MarktResolve
        },
        canActivate: [AuthGuard],
        data: {
            privileges: [Privilege.Markt.GetAllFilteredAndPaged]
        }
    }
];