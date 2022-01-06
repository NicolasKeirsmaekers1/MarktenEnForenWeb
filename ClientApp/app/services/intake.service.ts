
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';

import { IQueryParameters, IPagedResult } from "../core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { BaseService } from "../core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class IntakeService extends BaseService {
    private url = AppSettings.API_ENDPOINT + "intakes/";

    constructor(protected _http: HttpClient, protected loader: SlimLoadingBarService) {
        super(_http, loader);
    }

    getAll(query?: any): Observable<IPagedResult<any>> {
        var params = new HttpParams();
        if (query) {
            params = params.set("page", query.page.toString());
            params = params.set("pageSize", query.pageSize.toString());
            if (query.filter) params = params.set("filter", query.filter);
            if (query.aanvraagstatuscode) params = params.set("aanvraagStatusCode", query.aanvraagstatuscode);
            if (query.sort && query.sort.length > 0) params = params.set("sort", query.sort.join(","));
        }
        this.loader.start();
        return this._http.get<IPagedResult<any>>(this.url, { headers: this.jsonHeaders, params: params }).pipe(
            catchError(this.handleError),
            tap(x => this.loader.complete()));
    }

    get(id: number): Observable<any> {
        this.loader.start();
        return this._http.get<any>(this.url + id).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    delete(id: number): Observable<any> {
        this.loader.start();
        return this._http.delete(this.url + id, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }
}