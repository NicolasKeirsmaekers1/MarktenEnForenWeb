
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { HttpClient } from "@angular/common/http";
import { BaseService, IPagedResult, IQueryParameters } from '../../core';
import { AppSettings } from '../../app.settings';
import { Persoon } from "./contactpersoon.component";
import { Adres } from "./app.address";

@Injectable()
export class KlantService extends BaseService {
    private url = this.apiEndpoint + 'customers/';

    constructor(protected http: HttpClient, protected loader: SlimLoadingBarService) {
        super(http, loader);
    }

    getAll(commercieel: boolean, isGesanctioneerd?: boolean, query?: any): Observable<IPagedResult<any>> {
        var params = this.registerDefaultParameters(query);
        params = params.set("commercieel", commercieel.toString());
        if (isGesanctioneerd != undefined) {
            params = params.set("isGesanctioneerd", isGesanctioneerd.toString());
        }
        if (query.ondernemingsnummer) params = params.set("ondernemingsnummer", query.ondernemingsnummer.toString());


        this.loader.start();
        return this.http.get<IPagedResult<any>>(this.url, { headers: this.jsonHeaders, params: params }).pipe(
            catchError(this.handleError),
            tap(x => this.loader.complete()));
    }

    get(id: number): Observable<any> {
        this.loader.start();
        return this.http.get<any[]>(this.url + id, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError))
    }

    save(klant: any): Observable<any> {
        this.loader.start();
        const toAdd = JSON.stringify(klant);
        const action: Observable<any> = klant.id && klant.id > 0
            ? this.http.put<any>(this.url + klant.id, toAdd, { headers: this.jsonHeaders })
            : this.http.post<any>(this.url, toAdd, { headers: this.jsonHeaders });
        return action.pipe(tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    delete(id: number): Observable<any> {
        this.loader.start();
        return this.http.delete(this.url + id, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    getAanvragen(klantId: number, query?: any): Observable<IPagedResult<any>> {
        const params = this.registerDefaultParameters(query);
        this.loader.start();
        return this.http.get<IPagedResult<any>>(this.url + `${klantId}/requests`, { headers: this.jsonHeaders, params: params }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }
}

export interface IKlant {
    id?: number;
    juridischeEntiteit: string;
    firmanaam: string,
    ondernemingsnr: string;
    telefoon: string;
    gsm: string;
    email: string;
    fax: string;
    isCommercieel: boolean;
    maatschappelijkeZetel: Adres;
    facturatieAdres: Adres;
    contactPersonen: Persoon[];
    kboStatus: string;

}