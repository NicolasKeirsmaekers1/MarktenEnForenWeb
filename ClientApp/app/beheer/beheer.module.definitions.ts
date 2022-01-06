import { Route } from "@angular/router";
import { BeheerVariabelenComponent } from "./beheer-variabelen.component";
import { BeheerVariabelenDetailComponent } from "./beheer-variabelen-detail.component";
import { AuthGuard, Privilege } from "../auth";

export const beheerComponents: any[] = [
    BeheerVariabelenComponent,
    BeheerVariabelenDetailComponent
];

export const beheerDirectives: any[] = [];

export const beheerPipes: any[] = [];

export const routes: Route[] = [
    {
        path: "variabelen",
        component: BeheerVariabelenComponent
        //TODO
        //canActivate: [AuthGuard]
        //data: {
        //    privileges: [Privilege.Factuur.GetFilteredAndPaged]
        //}
    },
    {
        path: "variabelen/:code",
        component: BeheerVariabelenComponent
    },
    {
        path: "variabelen/:code/nieuw",
        component: BeheerVariabelenDetailComponent
    }
];