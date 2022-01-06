import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injectable } from "@angular/core";
import { RouterModule, Router, Route, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router";
import { SlimLoadingBarModule, SlimLoadingBarService, SlimLoadingBarComponent } from "ng2-slim-loading-bar";
import { NavigationComponent } from "./app.navigation";
import { SharedModule } from "../shared";


const routes: Route[] = [
    {
        path: "wachtlijst",
        loadChildren: () => import('../wachtlijst/wachtlijst.module').then(m => m.WachtlijstModule)
    },
    {
        path: "beheer",
        loadChildren: () => import('../beheer/beheer.module').then(m => m.BeheerModule)
    },
    {
        path: "markt",
        loadChildren: () => import('../markt/markt.module').then(m => m.MarktModule)
    },
    {
        path: "klant",
        loadChildren: () => import('../klant/klant.module').then(m => m.KlantModule)
    },
    {
        path: "abonnement",
        loadChildren: () => import('../abonnement/abonnement.module').then(m => m.AbonnementModule)
    },
    {
        path: "rapportage",
        loadChildren: () => import('../rapportage/main').then(m => m.RapportageModule)
    },
    {
        path: "factuur",
        loadChildren: () => import('../factuur/factuur.module').then(m => m.FactuurModule)
    },
    {
        path: "home",
        loadChildren: () => import('../home/main.module').then(m => m.HomeModule)
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    }
];

@NgModule({
    declarations: [NavigationComponent],
    providers: [SlimLoadingBarService],
    imports: [RouterModule.forRoot(routes), SlimLoadingBarModule.forRoot(), SharedModule],
    exports: [RouterModule, SlimLoadingBarModule, NavigationComponent, SharedModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavigationModule {
    constructor(private router: Router, private slimLoader: SlimLoadingBarService) {
        router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationStart) {
                this.slimLoader.start();
            }
            if (event instanceof NavigationEnd) {
                this.slimLoader.complete();
            }

            // Set loading state to false in both of the below events to hide the spinner in case a request fails
            if (event instanceof NavigationCancel) {
                this.slimLoader.complete();
            }
            if (event instanceof NavigationError) {
                this.slimLoader.complete();
            }
        });
    }
}