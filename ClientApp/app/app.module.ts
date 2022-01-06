import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AuthGuard, AuthService, readToken } from './auth';
import { UserDisplayComponent } from './auth/user-display/user-display.component';
import { CodeSelectModule } from './componenten/code-select';
import { DocumentUploadModule } from './componenten/document-upload';
import { LocatieSelectModule } from './componenten/location-select';
import { MarktSelectModule } from './componenten/markt-select';
import { ProductSelectModule } from './componenten/product-select';
import { LoggedOutModule } from './logged-out/logged-out.main';
import { NavigationModule } from './navigation/navigation.main';

export function tokenGetter() {

    return readToken();
}

@NgModule({
    imports: [
        BrowserModule,
        NavigationModule,
        LoggedOutModule,
        ModalModule.forRoot(),
        CodeSelectModule.forRoot(),
        ProductSelectModule.forRoot(),
        MarktSelectModule.forRoot(),
        LocatieSelectModule.forRoot(),
        DocumentUploadModule.forRoot(),
        BootstrapModalModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-top-right'
          }),
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter
            }
        })
    ],
    declarations: [
        AppComponent,
        UserDisplayComponent
    ],
    providers: [  
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}