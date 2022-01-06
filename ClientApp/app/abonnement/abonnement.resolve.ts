import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AbonnementService } from "../services";

@Injectable()
export class AbonnementResolve implements Resolve<any> {

    constructor(private abonnementService: AbonnementService) { }

    resolve(route: ActivatedRouteSnapshot): any {
        return this.abonnementService.get(route.params['id']);
    }
}