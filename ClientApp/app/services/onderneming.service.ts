
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { Observable } from 'rxjs';
import { IPagedResult } from "../core";
import { BaseService } from "../core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class OndernemingService extends BaseService {
    private url = this.apiEndpoint + 'companies';

    constructor(protected _http: HttpClient, protected loader: SlimLoadingBarService) {
        super(_http, loader);
    }

    search(ondernemingsnummer: any): Observable<any> {
        this.loader.start();
        return this._http.get(`${this.url}/${ondernemingsnummer}`, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }
}