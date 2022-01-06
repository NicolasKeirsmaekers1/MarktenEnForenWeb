
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable, of as observableOf } from 'rxjs';
import "rxjs/add/observable/of";
import "rxjs/add/operator/share";
import { map, share } from 'rxjs/operators';




const helper = new JwtHelperService();

@Injectable()
export class AuthService {
    private permissions: string[];
    private observable: Observable<string[]>;
    private PERMISSION_URL: string = '/permissions';
    private TOKENREFRESH_URL = "/refresh";
    private USERINFO_URL = "/me";
    private LOGOUT_URL = "/logout";
    private LOGIN_URL = "/login";
    private token: IToken;

    constructor(private http: HttpClient) {
        this.token = this.decodeToken();
    }

    isLoggedIn(): boolean {
        return !helper.isTokenExpired(Cookie.get('jwt')) || Cookie.get('jwt') === null;
    }

    refreshToken(): void {
        this.http.get<any>(this.TOKENREFRESH_URL).subscribe(
            data => {
                Cookie.set("jwt", data.jwt, null, "/", null);
            },
            error => console.log('Token refresh error: ', error)
        );
    }

    hasPermission = (...privileges: string[]): Observable<boolean> => {
        return this.getPermissions().pipe(map((permissions: string[]) => {
            let result = false;
            for (let i = 0; i < privileges.length; i++) {
                if (permissions.findIndex(item => item === privileges[i]) > -1) {
                    result = true;
                    break;
                }
            }
            return result;
        }));
    }

    getPermissions(): Observable<string[]> {
        if (this.permissions || sessionStorage["permissions"]) {

            // if `data` is available just return it as `Observable`
            return observableOf(this.permissions || JSON.parse(sessionStorage["permissions"]) as string[]);
        } else if (this.observable) {
            // if `this.observable` is set then the request is in progress
            // return the `Observable` for the ongoing request
            return this.observable;
        } else {
            // create the request, store the `Observable` for subsequent subscribers
            this.observable = this.http.get(this.PERMISSION_URL).pipe(map((response: any) => {
                // when the cached data is available we don't need the `Observable` reference anymore
                this.observable = null;
                this.permissions = response as string[];
                sessionStorage.setItem('permissions', JSON.stringify(this.permissions));
                return this.permissions;

            }), share());
            return this.observable;
        }
    }

    getUserProfile(): IUserProfile {
        var userProfile: IUserProfile = {
            firstName: "",
            lastName: "",
            fullName: "",
            userName: ""
        };
        this.http.get<IUserProfile>(this.USERINFO_URL)
            .subscribe(
                res => {
                    userProfile.userName = res.userName,
                        userProfile.firstName = res.firstName,
                        userProfile.lastName = res.lastName,
                        userProfile.fullName = `${res.firstName} ${res.lastName}`
                },
                error => {
                    console.log(error);
                    this.logout(userProfile);
                }
            );

        return userProfile;
    }

    logout(user: IUserProfile): void {
        this.http.post(this.LOGOUT_URL, user)
            .subscribe(
                res => {
                    console.log(user.fullName + ' logged out.');
                },
                err => console.log(user.fullName + ' failed to log out succesfully!', err));

        this.http.get(this.LOGOUT_URL);
    }

    login(): void {
        this.http.get(this.LOGIN_URL, { observe: 'response' })
            .subscribe(
                res => {
                    var redirectLocation = res.headers.get('Location');
                    window.location.href = redirectLocation;
                },
                err => console.log('login redirect failed!', err));
    }

    private decodeToken(): IToken {
        let token = Cookie.get("jwt");
        if (token == null) return null;
        return helper.decodeToken(token) as IToken;
    }
}

export function readToken(): string {
    let token = Cookie.get("jwt");
    return token;
}

interface IToken {
    name: string;
    givenname: string;
    surname: string;
}

export interface IUserProfile {
    userName: string;
    firstName: string;
    lastName: string;
    fullName: string;
}