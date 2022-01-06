
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Observable, forkJoin } from 'rxjs';
import { BaseService, IEnumerableResponse } from "../core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class TariefService extends BaseService {
    private url = AppSettings.API_ENDPOINT;

    constructor(protected _http: HttpClient, protected loader: SlimLoadingBarService) {
        super(_http, loader);
    }
    getStandplaatsTarief(id: number): Observable<IStandplaatsTarief> {
        this.loader.start();
        return this.http.get<IStandplaatsTarief>(this.url + "standrates?id=" + id, { headers: this.jsonHeaders }).pipe(
            tap(x => { this.loader.complete() }),
            catchError(this.handleError));
    }
    getStandplaatsTariefByCode(code: string): Observable<IStandplaatsTarief> {
        this.loader.start();
        return this.http.get<IStandplaatsTarief>(this.url + "standrates?code=" + code, { headers: this.jsonHeaders }).pipe(
            tap(x => { this.loader.complete() }),
            catchError(this.handleError));
    }
    getStandplaatsTarieven(): Observable<IStandplaatsTarief[]> {
        this.loader.start();
        return this.http.get<IEnumerableResponse<IStandplaatsTarief>>(this.url + "standrates", { headers: this.jsonHeaders }).pipe(
            map(response => response.response),
            tap(x => { this.loader.complete() }),
            catchError(this.handleError));
    }
    saveStandplaats(payloads: IStandplaatsTarief[]): Observable<any> {
        this.loader.start();
        var tasks$ = [];
        for (var i = 0; i < payloads.length; i++) {
            let payload = payloads[i];
            let action: Observable<Response> = this.http.put<Response>(this.url + "standrates/" + payload.id, payload);
            tasks$.push(action);
        }
        let groupAction = forkJoin(tasks$);
        return groupAction.pipe(tap(x => { this.loader.complete(); }), catchError(this.handleError));
    }
    getElektriciteitTarief(id: number): Observable<IElektriciteitTarief> {
        this.loader.start();
        return this.http.get<IElektriciteitTarief>(this.url + "electricityrates?id=" + id, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }
    getElektriciteitTariefByCode(code: string): Observable<IElektriciteitTarief> {
        this.loader.start();
        return this.http.get<IElektriciteitTarief>(this.url + "electricityrates?code=" + code, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }
    getElektriciteitTarieven(): Observable<IElektriciteitTarief[]> {
        this.loader.start();
        return this.http.get<IEnumerableResponse<IElektriciteitTarief>>(this.url + "electricityrates", { headers: this.jsonHeaders }).pipe(
            map(response => response.response),
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }
    saveElektriciteit(payloads: IElektriciteitTarief[]): Observable<any> {
        this.loader.start();
        var tasks$ = [];
        for (var i = 0; i < payloads.length; i++) {
            let payload = payloads[i];
            let action: Observable<Response> = this.http.put<Response>(this.url + "electricityrates/" + payload.id, payload);
            tasks$.push(action);
        }
        let groupAction = forkJoin(tasks$);
        return groupAction.pipe(tap(x => { this.loader.complete(); }), catchError(this.handleError));
    }


}

export interface IStandplaatsTarief {
    id: number;
    dagVanDeWeekId?: number;
    eenheidsPrijs?: number;
    omschrijving: any;
}

export interface IElektriciteitTarief {
    id: number;
    elektriciteitId?: number;
    eenheidsPrijs?: number;
    isActief?: boolean;
    code: string;
    omschrijving: string;

}


