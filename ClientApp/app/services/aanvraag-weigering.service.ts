
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';



import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { BaseService, IPagedResult } from "../core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AanvraagWeigeringService extends BaseService {
    private url = AppSettings.API_ENDPOINT;

    constructor(protected _http: HttpClient, protected loader: SlimLoadingBarService) {
        super(_http, loader);
    }

    getAll(aanvraagId: number): Observable<IPagedResult<IWeigeringsTermijn>> {
        this.loader.start();
        return this._http.get<IPagedResult<IWeigeringsTermijn>>(`${this.url}requests/${aanvraagId}/refusals`).pipe(
            tap(data => this.loader.complete()),
            catchError(this.handleError));
    }

    starten(aanvraagId: number, item: any): Observable<IWeigeringsTermijn> {
        this.loader.start();
        return this._http.post<IWeigeringsTermijn>(`${this.url}requests/${aanvraagId}/refusals`, item).pipe(
            tap(data => this.loader.complete()),
            catchError(this.handleError));
    }

    registreren(aanvraagId: number, item: any): Observable<IWeigeringsTermijn> {
        this.loader.start();
        return this._http.put<IWeigeringsTermijn>(`${this.url}requests/${aanvraagId}/refusals/${item.id}`, item).pipe(
            tap(data => this.loader.complete()),
            catchError(this.handleError));
    }

}

export interface IWeigeringsTermijn {
    id?: number;
    startDatum: Date;
    weigeringsDatum?: Date;
    motivatie?: string;
}