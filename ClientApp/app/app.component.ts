import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Overlay } from 'ngx-modialog';
import { interval as observableInterval } from 'rxjs';

import { AuthService } from './auth';

@Component({
    selector: "mafo-app",
    templateUrl: "./app.component.html"
})

export class AppComponent implements OnInit {
    constructor(overlay: Overlay, vcRef: ViewContainerRef, private authService: AuthService) {
    }

    get loggedOut(): boolean {
        var cookie = Cookie.get('jwt');

        return cookie === null;
    }

    ngOnInit() {
        debugger;
        //refresh token every 20 minutes
        observableInterval(1200000)
            .subscribe((val) => {
                this.authService.refreshToken()
            });
    }
}