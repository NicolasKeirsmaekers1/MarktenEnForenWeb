import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { KlantService } from "../componenten/klant-core";

@Injectable()
export class KlantResolve implements Resolve<any> {

    constructor(private klantService: KlantService) {}

    resolve(route: ActivatedRouteSnapshot): any {
        return this.klantService.get(route.params['id']);
  }
}