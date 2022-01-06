import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
    selector: "logged-out",
    templateUrl: "../logged-out/html/logged-out.component.layout.html"
})

export class LoggedOutComponent {
    constructor(private auth: AuthService) {
    }

    login(): void {
        this.auth.login();
    }
}