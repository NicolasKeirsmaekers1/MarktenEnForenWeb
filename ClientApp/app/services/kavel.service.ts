
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';
import { KavelStatusEnum, IKavelOpmerking, IKavelIdentifierDto, IMarktboekjeKavelDetailDto, IKavelPut } from './kavel';
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { ToastrService } from 'ngx-toastr';
import { BaseService, IQueryParameters, IEnumerableResponse } from "../core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Product } from '../abonnement/product.component';

@Injectable()
export class KavelService extends BaseService {
    constructor(protected http: HttpClient, protected loader: SlimLoadingBarService, protected toastr: ToastrService) {
        super(http, loader);
    }

    getAllKavelsForMarktOverview(marktId: number): Observable<IKavelIdentifierDto[]> {
        return this.http.get<IEnumerableResponse<IKavelIdentifierDto>>(this.apiEndpoint + 'markets/' + marktId + '/lots').pipe(
            map(response => response.response),
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    getAllKavelsForAbonnement(marktId: number, aboId: number): Observable<IKavelIdentifierDto[]> {
        let params = new HttpParams();
        params = params.set('subscriptionId', aboId.toString());

        return this.http.get<IEnumerableResponse<IKavelIdentifierDto>>(this.apiEndpoint + 'markets/' + marktId + '/lots', { params: params }).pipe(
            map(response => response.response),
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    getKavelDetail(marktId: number, kavelId: number): Observable<IMarktboekjeKavelDetailDto> {
        this.loader.start();
        return this.http.get<IMarktboekjeKavelDetailDto>(this.apiEndpoint + 'markets/' + marktId + '/lots/' + kavelId, { headers: this.jsonHeaders }).pipe(
            tap(x => { this.loader.complete() }),
            catchError(this.handleError));
    }

    getAll(filter: IKavelFilter): Observable<IKavelIdentifierDto[]> {
        this.loader.start();
        var params = this.registerDefaultParameters(filter.query);
        if (filter.marktId) params = params.set("marketid", filter.marktId.toString());
        if (filter.klantId) params = params.set("subscriptionid", filter.klantId.toString());
        if (filter.abonnementId) params = params.set("subscriptionId", filter.abonnementId.toString());

        return this.http.get<IEnumerableResponse<IKavelIdentifierDto>>(this.apiEndpoint + 'markets/' + filter.marktId + '/lots', { headers: this.jsonHeaders, params: params }).pipe(
            map(response => response.response),
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    downloadKavels(marktId: number, detail: boolean = true, volgendKwartaal: boolean = false, huidigKwartaal: boolean = true): void {
        let params = new HttpParams();
        params = params.set("detail", detail.toString());
        params = params.set("sort", "oudenaam");
        params = params.set("volgendkwartaal", volgendKwartaal.toString());
        params = params.set("huidigkwartaal", huidigKwartaal.toString());
        this.loader.start();
        this.http.get(this.apiEndpoint + 'markets/' + marktId + '/lotexports', { headers: this.csvHeaders, params: params, observe: 'response', responseType: 'text' }).pipe(
            tap((response: any) => {
                return this.saveAsFile(response, "text/csv");
            }),
            catchError(this.handleError))
            .subscribe(success => {
                this.loader.complete();
                this.toastr.success("Bestand klaar voor download", "Opslaan");
            }, error => {
                this.toastr.error("We konden het bestand niet klaar zetten voor download", "Oeps...");
            });
    }

    uploadKavels(marktId: number, file: ImarktUploadDocument): Observable<any> {
        this.loader.start();
        return this.http.post(this.apiEndpoint + 'markets/' + marktId + '/lotexports', file, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    get(marktId: number, kavelId: number): Observable<IMarktboekjeKavelDetailDto> {
        this.loader.start();
        return this.http.get<IMarktboekjeKavelDetailDto>(this.apiEndpoint + 'markets/' + marktId + '/lots/' + kavelId, { headers: this.jsonHeaders }).pipe(
            tap(x => { this.loader.complete() }),
            catchError(this.handleError));
    }
    getTakenKavels(marktId: number): Observable<any> {
        this.loader.start();
        return this.http.get<IEnumerableResponse<any>>(this.apiEndpoint + 'markets/' + marktId + '/lottasks', { headers: this.jsonHeaders }).pipe(
            map(response => response.response),
            tap(x => { this.loader.complete() }),
            catchError(this.handleError));
    }

    save(kavel: any): Observable<any> {
        this.loader.start();
        let action: Observable<Response> = kavel.kavelId && kavel.kavelId > 0
            ? this.http.put<Response>(this.apiEndpoint + 'markets/' + kavel.marktId + '/lots/' + kavel.kavelId, kavel, { headers: this.jsonHeaders })
            : this.http.post<Response>(this.apiEndpoint + 'markets/' + kavel.marktId + '/lots', kavel, { headers: this.jsonHeaders });
        return action.pipe(tap(x => this.loader.complete()),
            catchError(this.handleError),
            map((response: Response) => response));
    }

    getAvailableAmount(marktId: number): Observable<number> {
        this.loader.start();
        return this.http.head<number>(this.apiEndpoint + 'markets/' + marktId + '/lots', { headers: this.jsonHeaders }).pipe(
            tap(x => { this.loader.complete() }),
            catchError(this.handleError));
    }
}

export interface IKavelFilter {
    marktId?: number;
    klantId?: number;
    abonnementId?: number;
    query?: IQueryParameters;
}

export interface ImarktUploadDocument {
    bestand: any;
}

