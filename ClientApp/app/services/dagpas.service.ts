
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';
import { IQueryParameters, IPagedResult, ApplicationConstants, BaseService } from "../core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { HttpClient } from "@angular/common/http";
import { IKavelOverview } from "../services";
import { Persoon, Adres } from "../componenten/klant-core";

interface IKlant {
    id?: number;
    juridischeEntiteit: string;
    elektriciteit: string
    firmanaam: string,
    ondernemingsnr: string;
    telefoon: string;
    gsm: string;
    email: string;
    fax: string;
    maatschappelijkeZetel: Adres;
    contactPersonen: Persoon[];
}
interface IDagpasAanvraag {
    klantId: number;
    elektriciteitCode: string;
    marktId: number;
    selectedKavels: number[]
}
@Injectable()
export class DagpasService extends BaseService {
    private url = AppSettings.API_ENDPOINT + 'daypasses';

    constructor(protected _http: HttpClient, protected loader: SlimLoadingBarService) {
        super(_http, loader);
    }

    getAll(query?: any): Observable<IPagedResult<any>> {
        var params = this.registerDefaultParameters(query);
        if (query) {
            if (query.aanvraagstatuscode) params.set("query.aanvraagStatusCode", query.aanvraagstatuscode);
        }
        this.loader.start();
        var tmp = this._http.get<IPagedResult<any>>(this.url, { headers: this.jsonHeaders, params: params }).pipe(
            catchError(this.handleError),
            tap(x => this.loader.complete()));
        return tmp;
    }

    get(id: number): Observable<any> {
        this.loader.start();
        return this.http.get<any[]>(this.url + id, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    save(marktId: number, klant: IKlant, kavels: IKavelOverview[]): Observable<any> {
        this.loader.start();
        let dagpasAanvraag: IDagpasAanvraag = { elektriciteitCode: klant.elektriciteit, klantId: klant.id, marktId: marktId, selectedKavels: kavels.map(function (a) { return a.id; }) };
        const toAdd = JSON.stringify(dagpasAanvraag);
        //  const toAdd = JSON.stringify(dagpas);
        //const action: Observable<Response> = dagpas.id && dagpas.id > 0
        //    ? this.http.put(this.url + dagpas.id, toAdd, { headers: this.jsonHeaders })
        //    : this.http.post(this.url, toAdd, { headers: this.jsonHeaders });
        const action: Observable<Response> = this.http.post<Response>(this.url, toAdd, { headers: this.jsonHeaders });
        return action.pipe(tap(x => this.loader.complete()),
            catchError(this.handleError));
    }
}

