import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IntakeService } from "../services/intake.service";

@Injectable()
export class WachtlijstResolve implements Resolve<any> {

    constructor(private intakeService: IntakeService) { }

    resolve(route: ActivatedRouteSnapshot): any {
        return this.intakeService.get(route.params['id']);
    }
}