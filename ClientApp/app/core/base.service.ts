
import {throwError as observableThrowError, of as observableOf, empty as observableEmpty,  Observable } from 'rxjs';

import {share, catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from "@angular/common/http";
import "rxjs/add/observable/of";
import "rxjs/add/observable/empty";
import "rxjs/add/operator/share";
import * as FileSaver from "file-saver";

export class BaseService {
    protected jsonHeaders = new HttpHeaders({ 'Content-Type': 'application/json', "Accept": 'application/json' });
    protected jsonHalHeaders = new HttpHeaders({ 'Content-Type': 'application/hal+json', "Accept": 'application/json, application/hal+json' });
    protected csvHeaders = new HttpHeaders({ 'Accept': 'text/csv' });
    protected apiEndpoint = AppSettings.API_ENDPOINT;
    private cache = {};
    private observable = {};
    constructor(protected http: HttpClient, protected loader: SlimLoadingBarService) { loader.color = '#FFFFFF'}


    protected registerDefaultParameters(query: any, params?: HttpParams): HttpParams {
        params = params || new HttpParams();
        if (query) {
            if (query.page) params = params.set("page", query.page.toString());
            if (query.pageSize) params = params.set("pageSize", query.pageSize.toString());
            if (query.filter) params = params.set("filter", query.filter);
            if (query.sort && query.sort.length > 0) params = params.set("sort", query.sort.join(","));
        }
        return params;
    }
    protected clearCache(key: string) {
        const oKey = key.toLowerCase();
        this.cache[oKey] = null;
    }
    protected cacheResult<T>(key: string, observable: Observable<T>): Observable<T> {
        const oKey = key.toLowerCase();
        if (!oKey) return observableEmpty();
        if (this.cache[oKey]) {
            // if `data` is available just return it as `Observable`
            return observableOf(this.cache[oKey] as T);
        } else if (this.observable[oKey]) {
            // if `this.observable` is set then the request is in progress
            // return the `Observable` for the ongoing request
            return this.observable[oKey];
        } else {
            // create the request, store the `Observable` for subsequent subscribers
            this.observable[oKey] = observable.pipe(map(response => {
                // when the cached data is available we don't need the `Observable` reference anymore
                delete this.observable[oKey];
                    this.cache[oKey] = response as T;
                    return this.cache[oKey] as T;
                // make it shared so more than one subscriber can get the result
            }),
            catchError(() => { return observableEmpty();}),
            share(),);
            return this.observable[oKey];
        }
    }

    handleError = (error: HttpErrorResponse | any) => {
        this.loader.complete();
        let body;
        if (error instanceof HttpErrorResponse) {
            try {
                body = error.error;
            } catch (e) {
                body = `${error.status} - ${error.statusText}`;
            }
        } else {
            body = "Er heeft zich een fout voorgedaan";
        }
        return observableThrowError(body);
    };

    protected saveAsFile(response: any, fileMimeType: string, fileName?: string): Observable<Response> {
        try {
            let blob = new Blob([response.body], { type: fileMimeType });
            if (!fileName) {
                fileName = response.headers.get("content-disposition");
                fileName = fileName.substr(fileName.lastIndexOf("'") + 1);
            }
            FileSaver.saveAs(blob, fileName);
            return observableOf(response);
        } catch (e) {
            return observableThrowError({ error: "We konden het bestand niet klaar zetten voor download" });
        }
    }
}


