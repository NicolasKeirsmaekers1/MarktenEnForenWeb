import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, IUserProfile } from '../auth.service';

@Component({
    selector: "user-display",
    templateUrl: "./user-display.component.layout.html",
    styleUrls:  ["./user-display.component.styling.scss"]
})
export class UserDisplayComponent implements OnInit {

    userProfile: IUserProfile;

    constructor(private authService: AuthService, private router: Router) { }


    ngOnInit(): void {
        this.userProfile = this.authService.getUserProfile();
    }
    
}