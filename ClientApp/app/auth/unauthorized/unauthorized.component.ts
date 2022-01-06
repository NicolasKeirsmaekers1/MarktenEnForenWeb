import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: "not-authorized",
    templateUrl: "./unauthorized.component.layout.html",
    styleUrls: ["./unauthorized.component.styling.scss"]
})
export class UnauthorizedComponent {

    constructor(private _router: Router) {
    }

    ngOnInit(): void {
    }
    
}