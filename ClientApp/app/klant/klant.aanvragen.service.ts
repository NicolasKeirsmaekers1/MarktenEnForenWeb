
import {map, catchError, tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { HttpClient } from "@angular/common/http";
import { BaseService } from '../core';

@Injectable()
export class KlantAanvragenService extends BaseService {

    private url = AppSettings.API_ENDPOINT;

    constructor(protected http: HttpClient, protected loader: SlimLoadingBarService) {
        super(http, loader);
    }

    getAll(klantId: number): Observable<any[]> {
        this.loader.start();

        return this.http.get<any>(this.url + `klanten/${klantId}/aanvragen`, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError),
            map((response: any) => response._embedded.resourceList as any[]),);
    }
}