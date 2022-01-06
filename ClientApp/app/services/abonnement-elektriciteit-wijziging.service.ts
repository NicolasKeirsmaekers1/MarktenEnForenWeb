
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';



import { IQueryParameters, IPagedResult } from "../core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { BaseService } from '../core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class AbonnementElektriciteitWijzigingService extends BaseService {
    private urlBase = AppSettings.API_ENDPOINT + "subscriptions/";

    constructor(protected _http: HttpClient, protected loader: SlimLoadingBarService) {
        super(_http, loader);
    }

    getAll(abonnementId: number, query?: any): Observable<IPagedResult<any>> {
        var params = new HttpParams();
        if (query) {
            params = params.set("page", query.page.toString());
            params = params.set("pageSize", query.pageSize.toString());
            if (query.sort && query.sort.length > 0) params = params.set("sort", query.sort.join(","));
        }
        this.loader.start();
        return this._http.get<IPagedResult<any>>(this.urlBase + abonnementId + "/electricitychanges", { headers: this.jsonHeaders, params: params }).pipe(
            catchError(this.handleError),
            tap(x => this.loader.complete()));
    }

    addAbonnementElektriciteitWijziging(abonnementElektriciteitWijziging: any): Observable<any> {
        this.loader.start();
        return this._http.post(this.urlBase + abonnementElektriciteitWijziging.abonnementId + '/electricitychanges', abonnementElektriciteitWijziging, { headers: this.jsonHeaders, observe: 'response' }).pipe(
            catchError(this.handleError),
            tap(x => this.loader.complete()))
    }

    updateAbonnementElektriciteitWijziging(abonnementElektriciteitWijziging: any): Observable<any> {
        this.loader.start();
        return this._http.put(this.urlBase + abonnementElektriciteitWijziging.abonnementId + '/electricitychanges', abonnementElektriciteitWijziging, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    deleteAbonnementElektriciteitWijziging(abonnementElektriciteitWijziging: any): Observable<any> {
        this.loader.start();
        return this._http.delete(this.urlBase + abonnementElektriciteitWijziging.abonnementId + '/electricitychanges', { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }
}