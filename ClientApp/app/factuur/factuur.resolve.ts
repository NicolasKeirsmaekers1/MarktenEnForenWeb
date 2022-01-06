import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FactuurService } from "./factuur.service";

@Injectable()
export class FactuurResolve implements Resolve<any> {
    constructor(private factuurService: FactuurService) { }

    resolve(route: ActivatedRouteSnapshot): any {
        return this.factuurService.get(route.params['id']);
    }
}