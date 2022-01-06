import { Route } from "@angular/router";
import { UnauthorizedComponent } from "./unauthorized/unauthorized.component";

export const authComponents: any[] = [
    UnauthorizedComponent
];

export const routes: Route[] = [
    {
        path: "unauthorized",
        component: UnauthorizedComponent
    }
];