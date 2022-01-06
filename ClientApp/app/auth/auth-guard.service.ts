
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }
    
    canActivate(routeSnapshot: ActivatedRouteSnapshot): Observable<boolean> {
        let customRedirect = '/auth/unauthorized';
        let privileges = routeSnapshot.data['privileges'] as string[];
        let isUserLoggedIn = this.authService.isLoggedIn();

        return this.authService.hasPermission(...privileges).pipe(
            map((result: boolean) => {
                return result && isUserLoggedIn;
            }),
            catchError((result: boolean) => {
                let redirect = !!customRedirect ? customRedirect : '/unrestricted';
                this.router.navigate([redirect]);
                return observableThrowError(result);
            }),);
    }
}