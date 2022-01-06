
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { AppSettings } from '../app.settings';
import { BaseService } from '../core';
import { Observable } from "rxjs";
import { IPagedResult, IQueryParameters } from "../core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class AanvraagMarktService extends BaseService {
    private url = this.apiEndpoint + 'marketrequests/';

    constructor(protected http: HttpClient, protected loader: SlimLoadingBarService) {
        super(http, loader);
    }

    getAll(query?: any): Observable<IPagedResult<any>> {
        var params = new HttpParams();
        if (query) {
            params = params.set("page", query.page.toString());
            params = params.set("pageSize", query.pageSize.toString());
            if (query.filter) params = params.set("query.filter", query.filter);
            if (query.aanvraagstatuscode) params = params.set("query.aanvraagStatusCode", query.aanvraagstatuscode);
            if (query.hernieuwing) params = params.set("query.ishernieuwing", query.hernieuwing);
            if (query.sort && query.sort.length > 0) params = params.set("sort", query.sort.join(","));
        }
        this.loader.start();
        return this.http.get<IPagedResult<any>>(this.url, { headers: this.jsonHeaders, params: params }).pipe(
            catchError(this.handleError),
            tap(x => this.loader.complete()));
    }
}