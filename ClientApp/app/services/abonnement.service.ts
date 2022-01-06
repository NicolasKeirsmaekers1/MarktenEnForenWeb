
import { throwError as observableThrowError, Observable } from 'rxjs';

import { tap, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';



import { IQueryParameters, IPagedResult, ApplicationConstants, IEnumerableResponse } from "../core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { BaseService } from "../core/base.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AbonnementService extends BaseService {
    private url = AppSettings.API_ENDPOINT + 'subScriptions';

    constructor(protected http: HttpClient, protected loader: SlimLoadingBarService) {
        super(http, loader);
    }

    getAll(pageOptions?: any, searchCriteria?: IAbonnementSearchCriteria): Observable<IPagedResult<any>> {
        let params = this.registerDefaultParameters(pageOptions);
        if (searchCriteria) {
            if (searchCriteria.marktId) params = params.set("marktId", searchCriteria.marktId.toString());
            if (searchCriteria.klantId) params = params.set("klantId", searchCriteria.klantId.toString());
            if (searchCriteria.query) params = params.set("query", searchCriteria.query.toString());
            if (searchCriteria.productId) params = params.set("productId", searchCriteria.productId.toString());
            if (searchCriteria.verkoopCode) params = params.set("verkoopCode", searchCriteria.verkoopCode);
            if (searchCriteria.statusCode) params = params.set("statusCode", searchCriteria.statusCode);
            if (searchCriteria.beginDatum) params = params.set("beginDatum", searchCriteria.beginDatum.toString() == "" ? "" : new Date(searchCriteria.beginDatum.toString()).toISOString());
            if (searchCriteria.eindDatum) params = params.set("eindDatum", searchCriteria.eindDatum.toString() == "" ? "" : new Date(searchCriteria.eindDatum.toString()).toISOString());
        }
        this.loader.start();
        return this.http.get<IPagedResult<any>>(this.url, { headers: this.jsonHeaders, params: params }).pipe(
            catchError(this.handleError),
            tap(x => this.loader.complete()));
    }

    get(id: number): Observable<any> {
        this.loader.start();
        return this.http.get<any>(`${this.url}/${id}`).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    GetAllForKlantOpMarkt(klantId: number, marktId: number) {
        this.loader.start();
        return this.http.get<IEnumerableResponse<any>>(`${AppSettings.API_ENDPOINT}markets/${marktId}/subscriptions?customerId=${klantId}`).pipe(
            map(response => response.response),
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    create(data: INieuwAbonnement): Observable<IAbonnementIdentifier> {
        this.loader.start();
        return this.http.post<IAbonnementIdentifier>(this.url, data).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    post(id: number, data: IAbonnementStandplaats) {
        this.loader.start();
        return this.http.post(`${this.url}/${id}/stands`, data).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

    wijzigStatus(id: number, statusCode: string, data: any, files?: any) {
        let call: string;
        switch (statusCode) {
            case ApplicationConstants.AbonnementStatus.LopendCode:
                call = "ongoings";
                break;
            case ApplicationConstants.AbonnementStatus.GeschorstCode:
                call = "schorsing";
                break;
            case ApplicationConstants.AbonnementStatus.IngetrokkenCode:
                call = "withdrawals";
                break;
            case ApplicationConstants.AbonnementStatus.OpgeschortCode:
                var isFilesEmpty = !Object.keys(files).length
                if (!isFilesEmpty) {
                    call = "suspensionfiles";
                } else {
                    call = "suspensions";

                }
                break;
            case ApplicationConstants.AbonnementStatus.OpgezegdCode:
                var isFilesEmpty = !Object.keys(files).length
                if (!isFilesEmpty) {
                    call = "cancellationfiles";
                } else {
                    call = "cancellations";
                } break;
            case ApplicationConstants.AbonnementStatus.InOverdrachtCode:
                var isFilesEmpty = !Object.keys(files).length
                if (!isFilesEmpty) {
                    call = "transferfiles";
                } else {
                    call = "transfers";
                } break;
            default:
                return observableThrowError("Geen geldige status wijziging");
        }

        this.loader.start();

        if (files && Object.keys(files).length > 0) {
            let formData = new FormData();
            for (let key in data) {
                if (key !== "files") {
                    let value = data[key].toISOString ? data[key].toISOString() : data[key];
                    formData.append(key, value);
                }
            }
            for (let key in files) {
                for (var i = 0; i < files[key].length; i++) {
                    formData.append(key, files[key][i]);
                }
            }
            return this.http.post(`${this.url}/${id}/${call}`, formData).pipe(
                tap(x => this.loader.complete()),
                catchError(this.handleError));
        }
        for (let key in data) {
            if (key === "eindDatumAbonnement") {
                data[key].setHours(data[key].getHours() + 3).toISOString;
            }
        }
        return this.http.post(`${this.url}/${id}/${call}`, data).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }
}

export interface IAbonnementSearchCriteria {
    klantId?: number;
    marktId?: number;
    query?: string;
    productId?: number;
    verkoopCode?: string;
    statusCode?: string;
    beginDatum?: Date;
    eindDatum?: Date;
}

export interface INieuwAbonnement {
    aanvraagId: number;
    kavels: Array<number>;
}

export interface IAbonnementIdentifier {
    id: number;
}

export interface IAbonnementStandplaats {
    beginDatum: Date;
    eindDatum?: Date;
    uitstallingCode: string;
    verkoopCode: string;
    producten: IAbonnementStandplaatsProduct[];
    kavelDatum?: Date;
    selectedKavels?: number[];
}

export interface IAbonnementStandplaatsProduct {
    id: number;
    productId: number;
    omschrijving: string;
    detail: string;
    isHoofdcategorie: boolean;
}