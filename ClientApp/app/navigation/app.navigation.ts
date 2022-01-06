import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService, IUserProfile } from "../auth/auth.service";
import { Privilege } from "../auth";
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: "mafo-nav",
    templateUrl: "./app.navigation.layout.html",
    styleUrls: ["app.navigation.styling.scss"]
})
export class NavigationComponent {
    menuWachtlijst: Observable<boolean>;
    menuItemReservatie: Observable<boolean>;
    menuKlant: Observable<boolean>;
    menuMarkt: Observable<boolean>;
    menuAbonnement: Observable<boolean>;
    menuFacturatie: Observable<boolean>;
    menuRapportage: Observable<boolean>;
    menuBeheer: Observable<boolean>;
    userProfile: IUserProfile;
    showMenu: boolean = false;
    environmentclass: string = "development";

    get loggedOut(): boolean {
        var cookie = Cookie.get('jwt');

        return cookie === null;
    }

    constructor(private router: Router, private auth: AuthService) {
        this.isDevelopment();
        this.userProfile = this.auth.getUserProfile();
        this.security();
    }

    year: Number = new Date().getUTCFullYear();
    node: string;

    isActive(instruction: any[]): boolean {
        return (this.node === undefined && this.router.isActive(this.router.createUrlTree(instruction), false)) || instruction.indexOf(this.node) > -1;
    };

    activate(event: Event, node: string): void {
        if (this.node != node) {
            this.node = node;
        } else {
            this.node = undefined;
        }
        event.preventDefault();
    };

    security(): void {
        this.menuWachtlijst = this.auth.hasPermission(Privilege.Aanvraag.Get);
        this.menuItemReservatie = this.auth.hasPermission(Privilege.Aanvraag.ReservatieRaadplegen);
        this.menuKlant = this.auth.hasPermission(Privilege.Klant.Get);
        this.menuMarkt = this.auth.hasPermission(Privilege.Markt.Get);
        this.menuAbonnement = this.auth.hasPermission(Privilege.Abonnement.Get);
        this.menuFacturatie = this.auth.hasPermission(Privilege.Factuur.FacturatieMenu);
        this.menuRapportage = this.auth.hasPermission(Privilege.Rapportage.Get);
        //this.menuBeheer = this.auth.hasPermission(Privilege.Rapportage.Get);
        //TODO
        this.menuBeheer = this.auth.hasPermission(Privilege.Beheer.BeheerMenu);

    }

    isDevelopment(): void {
        var url = window.location.href;
        if (url.search("mafoweb-a") != -1) {
            this.environmentclass = "acceptation"
        }
        else if (url.search("mafoweb-o") != -1) {
            this.environmentclass = "development";
        }
        else {
            this.environmentclass = "production";
        }
        console.log(url);

    }

    logout(): void {
        this.auth.logout(this.userProfile);
    }

    login(): void {
        this.auth.login();
    }
}