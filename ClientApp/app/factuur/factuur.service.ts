
import {tap, catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';
import { IPagedResult, IQueryParameters } from "../core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { BaseService } from "../core"
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class FactuurService extends BaseService {
    private url = AppSettings.API_ENDPOINT + 'invoices';

    constructor(protected _http: HttpClient, protected loader: SlimLoadingBarService) {
        super(_http, loader);
    }

    getAll(query?: any): Observable<IPagedResult<any>> {
        var params = new HttpParams();
        if (query) {
            params = params.set("page", query.page.toString());
            params = params.set("pageSize", query.pageSize.toString());
            if (query.filter) params = params.set("filter", query.filter);
            if (query.factuurType) params = params.set("factuurType", query.factuurType);
            if (query.isVerzondenNaarSAP !== undefined) params = params.set("isVerzondenNaarSap", query.isVerzondenNaarSAP);
            if (query.jaar) params = params.set("jaar", query.jaar);
            if (query.semester !== undefined) params = params.set("semester", query.semester);
            if (query.sort && query.sort.length > 0) params = params.set("sort", query.sort.join(","));
            if (query.geenAantal) params = params.set("geenAantal", query.geenAantal);
        }
        this.loader.start();
        return this._http.get<IPagedResult<any>>(this.url, { headers: this.jsonHeaders, params: params }).pipe(
            catchError(this.handleError),
            tap(x => this.loader.complete()),);
    }

    get(id: number): Observable<any> {
        this.loader.start();
        return this._http.get<any>(this.url + '/' + id).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError),);
    }

    startGenerateFacturenJob(): Observable<any> {
        this.loader.start();
        return this._http.post(AppSettings.API_ENDPOINT + 'invoicejobs', { headers: this.jsonHeaders}).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError),);            
    }

    getGenerateFacturenJob(): Observable<any> {
        this.loader.start();
        return this._http.get<any>(AppSettings.API_ENDPOINT + 'invoicejobs', { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError),);            
    }

    sendFacturenToSAP(query: any): Observable<any> {
        this.loader.start();
        return this._http.post(this.url , query, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError),);
    }
}