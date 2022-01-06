import { BaseService, IPagedResult } from "../core";
import { Injectable } from "@angular/core";
import { AppSettings } from "../app.settings";
import { Observable } from "rxjs";
import { IMarktWachtlijstOverview, IMarktWachtlijst } from "../componenten/markt-select";
import { HttpParams, HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";

@Injectable()
export class MarktWachtlijstService extends BaseService {
    private url = AppSettings.API_ENDPOINT + 'marketwaitinglists/';

    constructor(protected http: HttpClient, protected loader: SlimLoadingBarService) {
        super(http, loader);
    }

    getRegistratieWachtlijstOverizcht(query?: any): Observable<IPagedResult<IMarktWachtlijstOverview>> {
        var params = new HttpParams();
        if (query) {
            if (query.page) params = params.set("page", query.page.toString());
            if (query.pageSize) params = params.set("pageSize", query.pageSize.toString());
            if (query.query) params = params.set("query", query.query);
            if (query.sort && query.sort.length > 0) params = params.set("sort", query.sort.join(","));
            if (query.district) params = params.set("district", query.district);
            if (query.toeTeWijzen) params = params.set("toeTeWijzen", query.toeTeWijzen);
        }

        this.loader.start();
        return this.http.get<IPagedResult<IMarktWachtlijstOverview>>(this.url, { headers: this.jsonHeaders, params: params }).pipe(
            catchError(this.handleError),
            tap(x => this.loader.complete()));
    }

    getWachtlijst(marktId: number, query?: any): Observable<IPagedResult<IMarktWachtlijst>> {
        var params = new HttpParams();
        if (query) {
            if (query.page) params = params.set("page", query.page.toString());
            if (query.pageSize) params = params.set("pageSize", query.pageSize.toString());
            if (query.query) params = params.set("query", query.query);
        }
        this.loader.start();
        return this.http.get<IPagedResult<IMarktWachtlijst>>(this.url + marktId + "/waitinglists", { headers: this.jsonHeaders, params: params }).pipe(
            catchError(this.handleError),
            tap(x => this.loader.complete()));
    }
}