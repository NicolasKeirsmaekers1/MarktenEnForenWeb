
import { throwError as observableThrowError, Observable } from 'rxjs';

import { tap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { RequestPatchEvent } from './aanvraag'
import { AppSettings } from '../app.settings';
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { BaseService, IPagedResult } from "../core";
import { HttpClient } from "@angular/common/http";
import { ApplicationConstants } from "../core";
import "rxjs/add/observable/throw";

@Injectable()
export class AanvraagService extends BaseService {
    private url = this.apiEndpoint + "requests/";

    constructor(protected _http: HttpClient, protected loader: SlimLoadingBarService) {
        super(_http, loader);
    }

    getAll(query?: any): Observable<IPagedResult<any>> {
        var params = this.registerDefaultParameters(query);
        if (query) {
            if (query.aanvraagstatuscode) params.set("query.aanvraagStatusCode", query.aanvraagstatuscode);
        }
        this.loader.start();
        return this._http.get<IPagedResult<any>>(this.url, { headers: this.jsonHeaders, params: params }).pipe(
            catchError(this.handleError),
            tap(x => this.loader.complete()));
    }

    get(id: number): Observable<any> {
        this.loader.start();
        return this.http.get<any[]>(this.url + id, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError))
    }

    save(aanvraag: any): Observable<any> {
        this.loader.start();
        const toAdd = JSON.stringify(aanvraag);
        const action: Observable<any> = aanvraag.id && aanvraag.id > 0
            ? this.http.put(this.url + aanvraag.id, toAdd, { headers: this.jsonHeaders })
            : this.http.post(this.url, toAdd, { headers: this.jsonHeaders });
        return action.pipe(tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    patchDatumLaatsteHernieuwing(id: number, datumLaatsteHernieuwing: Date): Observable<any> {
        this.loader.start();
        return this.http.patch(this.url + id, new RequestPatchEvent({ Type: ApplicationConstants.AanvraagPatchType.Renewaldate, Value: datumLaatsteHernieuwing.toUTCString() }), { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    changeStatus(id: number, status: string, aanvraag: any): Observable<any> {
        this.loader.start();
        // change to pre-registratie
        if (status === ApplicationConstants.AanvraagStatus.Gepreregistreerd)
            return this._http.patch(this.url + id, new RequestPatchEvent({ Type: ApplicationConstants.AanvraagPatchType.Status, Value: ApplicationConstants.AanvraagStatus.Gepreregistreerd, Request: aanvraag }), { headers: this.jsonHeaders }).pipe(
                tap(x => this.loader.complete()),
                map(x => { return { result: true }; }),
                catchError(this.handleError));

        //change to registratie
        if (status === ApplicationConstants.AanvraagStatus.Geregistreerd)
            return this._http.patch(this.url + id, new RequestPatchEvent({ Type: ApplicationConstants.AanvraagPatchType.Status, Value: ApplicationConstants.AanvraagStatus.Geregistreerd, Request: aanvraag }), { headers: this.jsonHeaders }).pipe(
                tap(x => this.loader.complete()),
                map(x => { return { result: true }; }),
                catchError(this.handleError));


        this.loader.complete();
        return observableThrowError({ result: false });
    }
    delete(id: number): Observable<any> {
        this.loader.start();
        return this._http.delete(this.url + id, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }
}