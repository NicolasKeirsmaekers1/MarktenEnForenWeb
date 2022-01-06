import { Route } from "@angular/router";
import { WachtlijstIntakeComponent } from "./wachtlijst-intake.component";
import { WachtlijstIntakeViewComponent } from "./wachtlijst-intake-view.component";
import { WachtlijstIntakeDetailComponent } from "./wachtlijst-intake-detail.component";
import { WachtlijstIntakeKlantComponent } from "./wachtlijst-intake-klant.component";
import { WachtlijstRegistratieComponent } from "./wachtlijst-registratie.component";
import { WachtlijstRegistratieMarktComponent } from "./wachtlijst-registratie.markt.component";
import { WachtlijstReservatieComponent } from "./wachtlijst-reservatie.component";
import { WachtlijstHernieuwingInschrijvingComponent } from "./wachtlijst-hernieuwing-inschrijving.component";
import { WachtlijstResolve } from "./wachtlijst.resolve";
import { KlantResolve } from "../klant/klant.resolve";
import { AuthGuard, Privilege } from "../auth";
import { MarktResolve } from "../markt/markt.resolve";

export const wachtlijstComponents: any[] = [
    WachtlijstIntakeComponent,
    WachtlijstIntakeViewComponent,
    WachtlijstIntakeDetailComponent,
    WachtlijstIntakeKlantComponent,
    WachtlijstRegistratieComponent,
    WachtlijstRegistratieMarktComponent,
    WachtlijstReservatieComponent,
    WachtlijstHernieuwingInschrijvingComponent
];

export const wachtlijstDirectives: any[] = [];

export const wachtlijstPipes: any[] = [];

export const routes: Route[] = [
    {
        path: "intake",
        children: [
            {
                path: "",
                component: WachtlijstIntakeComponent,
                canActivate: [AuthGuard],
                data: {
                    intake: true,
                    privileges: [Privilege.Aanvraag.Get]
                }
            },
            {
                path: "klant",
                component: WachtlijstIntakeKlantComponent,
                canActivate: [AuthGuard],
                data: {
                    privileges: [
                        Privilege.Klant.GetAllFilteredAndPaged,
                        Privilege.Klant.GetCommerciele,
                        Privilege.Klant.GetNietCommerciele]
                }
            },
            {
                path: "nieuw/:id",
                component: WachtlijstIntakeDetailComponent,
                resolve: {
                    klant: KlantResolve
                },
                canActivate: [AuthGuard],
                data: {
                    privileges: [Privilege.Aanvraag.Get, Privilege.Klant.Get]
                }
            },
            {
                path: ":id",
                children: [
                    {
                        path: "",
                        component: WachtlijstIntakeViewComponent,
                        resolve: {
                            aanvraag: WachtlijstResolve
                        },
                        canActivate: [AuthGuard],
                        data: {
                            privileges: [Privilege.Aanvraag.Get]
                        }
                    },
                    {
                        path: "edit",
                        component: WachtlijstIntakeDetailComponent,
                        resolve: {
                            intake: WachtlijstResolve
                        },
                        canActivate: [AuthGuard],
                        data: {
                            privileges: [Privilege.Aanvraag.Get, Privilege.Aanvraag.Update]
                        }
                    }
                ]
            }
        ]
    }
    ,
    {
        path: "preregistratie",
        children: [
            {
                path: "",
                component: WachtlijstIntakeComponent,
                canActivate: [AuthGuard],
                data: {
                    intake: false,
                    privileges: [Privilege.Aanvraag.GetAllByStatusFilteredAndPaged]
                }
            },
            {
                path: ":id",
                children: [
                    {
                        path: "",
                        component: WachtlijstIntakeViewComponent,
                        resolve: {
                            aanvraag: WachtlijstResolve
                        },
                        canActivate: [AuthGuard],
                        data: {
                            privileges: [Privilege.Aanvraag.Get]
                        }
                    },
                    {
                        path: "edit",
                        component: WachtlijstIntakeDetailComponent,
                        resolve: {
                            intake: WachtlijstResolve
                        },
                        canActivate: [AuthGuard],
                        data: {
                            privileges: [Privilege.Aanvraag.PreregistratieBewerken]
                        }
                    }
                ]
            }
        ]
    }, {
        path: "registratie",
        children: [
            {
                path: "",
                component: WachtlijstRegistratieComponent,
                canActivate: [AuthGuard],
                data: {
                    privileges: [Privilege.Aanvraag.GetAllByStatusFilteredAndPaged]
                }
            }, {
                path: "markt/:id",
                component: WachtlijstRegistratieMarktComponent,
                canActivate: [AuthGuard],
                resolve: {
                    markt: MarktResolve
                },
                data: {
                    privileges: [Privilege.Aanvraag.GetAllByStatusFilteredAndPaged]
                }
            }, {
                path: ":id",
                children: [
                    {
                        path: "",
                        component: WachtlijstIntakeViewComponent,
                        resolve: {
                            aanvraag: WachtlijstResolve
                        },
                        canActivate: [AuthGuard],
                        data: {
                            privileges: [Privilege.Aanvraag.Get]
                        }
                    },
                    {
                        path: "edit",
                        component: WachtlijstIntakeDetailComponent,
                        resolve: {
                            intake: WachtlijstResolve
                        },
                        canActivate: [AuthGuard],
                        data: {
                            privileges: [Privilege.Aanvraag.RegistratieBewerken]
                        }
                    }
                ]
            }
        ]
    }, {
        path: "reservatie",
        children: [
            {
                path: "",
                component: WachtlijstReservatieComponent,
                canActivate: [AuthGuard],
                data: {
                    privileges: [Privilege.Aanvraag.GetAllByStatusFilteredAndPaged]
                }
            },
            {
                path: ":id",
                component: WachtlijstIntakeViewComponent,
                resolve: {
                    aanvraag: WachtlijstResolve
                },
                canActivate: [AuthGuard],
                data: {
                    privileges: [Privilege.Aanvraag.Get]
                }
            }
        ]
    }
    ,
    {
        path: "hernieuwinginschrijving",
        children: [
            {
                path: "",
                component: WachtlijstHernieuwingInschrijvingComponent,
                canActivate: [AuthGuard],
                data: {
                    privileges: [Privilege.Aanvraag.Update]
                }
            }
        ]
    }
];