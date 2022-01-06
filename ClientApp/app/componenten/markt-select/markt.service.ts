
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Observable } from 'rxjs';
import { IMarktDetail, IMarktWachtlijstOverview } from './markt';

import { IQueryParameters, IPagedResult, BaseService, IEnumerableResponse } from "../../core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class MarktService extends BaseService {
    private url = AppSettings.API_ENDPOINT + 'markets/';

    constructor(protected http: HttpClient, protected loader: SlimLoadingBarService) {
        super(http, loader);
    }

    getAll(query?: any): Observable<IPagedResult<IMarktDetail>> {
        //TODO: Add chaching

        var params = new HttpParams();
        if (query) {
            if (query.page) params = params.set("page", query.page.toString());
            if (query.pageSize) params = params.set("pageSize", query.pageSize.toString());
            if (query.query) params = params.set("query", query.query);
            if (query.klantId) params = params.set("klantId", query.klantId.toString());
            if (query.district) params = params.set("district", query.district);
            if (query.toeTeWijzen) params = params.set("toeTeWijzen", query.toeTeWijzen);
            if (query.ingetrokken) params = params.set("ingetrokken", query.ingetrokken);
            if (query.wachtlijst) params = params.set("wachtlijst", query.wachtlijst);
            if (query.alleenLopendOpgeschortGeschorst) params = params.set("alleenLopendOpgeschortGeschorst", query.alleenLopendOpgeschortGeschorst);
            if (query.sort && query.sort.length > 0) params = params.set("sort", query.sort.join(","));
        }
        this.loader.start();
        return this.http.get<IPagedResult<IMarktDetail>>(this.url, { headers: this.jsonHeaders, params: params }).pipe(
            catchError(this.handleError),
            tap(x => this.loader.complete()));
    }

    get(id: number): Observable<IMarktDetail> {
        this.loader.start();
        return this.http.get<IMarktDetail>(this.url + id).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    save(markt: IMarktDetail): Observable<IMarktDetail> {
        this.loader.start();
        const toAdd = JSON.stringify(markt);
        const action: Observable<IMarktDetail> = markt.id && markt.id > 0
            ? this.http.put<IMarktDetail>(this.url + markt.id, toAdd, { headers: this.jsonHeaders })
            : this.http.post<IMarktDetail>(this.url, toAdd, { headers: this.jsonHeaders });
        return action.pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    delete(id: number): Observable<any> {
        this.loader.start();
        return this.http.delete(this.url + id, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }
}