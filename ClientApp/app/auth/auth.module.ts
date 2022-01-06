// import { NgModule, ModuleWithProviders } from '@angular/core';
// import { AuthService, readToken } from "./auth.service";
// import { AuthGuard } from "./auth-guard.service";
// import { RouterModule } from "@angular/router";
// import { routes, authComponents } from "./auth.module.definitions";
// import { AuthHttp, AuthConfig } from 'angular2-jwt';

// export function authHttpServiceFactory(http: Http, options: RequestOptions) {
//     return new AuthHttp(new AuthConfig({
//         tokenName: 'token',
//         tokenGetter: (() => readToken())
//     }), http, options);
// }

// @NgModule({
//     imports: [RouterModule.forChild([...routes])],
//     declarations: [
//         ...authComponents
//     ],
//     entryComponents: [authComponents],
//     providers: [AuthGuard]
// })

// export class AuthModule {
//     static forRoot(): ModuleWithProviders {
//         return {
//             ngModule: AuthModule,
//             providers: [AuthService, , {
//                 provide: AuthHttp,
//                 useFactory: authHttpServiceFactory,
//                 deps: [Http, RequestOptions]
//             }]
//         };
//     }
// }