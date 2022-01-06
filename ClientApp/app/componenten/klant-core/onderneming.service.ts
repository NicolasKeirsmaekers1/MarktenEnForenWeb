import {catchError, tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BaseService } from "../../core";
import { IMessageEnrichedModel } from '../../services/MessageEnrichedModel';

@Injectable()
export class OndernemingService extends BaseService {
    private url = this.apiEndpoint + 'companies';

    constructor(protected _http: HttpClient, protected loader: SlimLoadingBarService) {
        super(_http, loader);
    }

    search(ondernemingsnummer: any): Observable<IMessageEnrichedModel<any>> {
        this.loader.start();
        return this._http.get<any>(`${this.url}/${ondernemingsnummer}`, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError),);
    }
    updateFromKBO(ondernemingsnummer: any): Observable<IMessageEnrichedModel<any>> {
        this.loader.start();
        return this._http.get<any>(`${this.url}/${ondernemingsnummer}/kbos`, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError),);
    }
}