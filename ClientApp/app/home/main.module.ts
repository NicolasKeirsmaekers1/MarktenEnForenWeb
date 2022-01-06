import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { HomeComponent } from "./home.component"
import { SharedModule } from "../shared/shared.module"

const homeRoutes: Route[] = [
    {
        path: "",
        component: HomeComponent
    }
];

@NgModule({
    declarations: [HomeComponent],
    imports: [
        SharedModule,
        RouterModule.forChild(homeRoutes)
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}