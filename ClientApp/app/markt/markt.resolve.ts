import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MarktService } from "../componenten/markt-select";

@Injectable()
export class MarktResolve implements Resolve<any> {

    constructor(private marktService: MarktService) { }

    resolve(route: ActivatedRouteSnapshot): any {
        return this.marktService.get(route.params['id']);
    }
}