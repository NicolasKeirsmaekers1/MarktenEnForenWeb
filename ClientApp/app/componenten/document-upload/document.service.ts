
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { AppSettings } from "../../app.settings";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { Observable } from "rxjs";
import { BaseService } from "../../core";
import { HttpClient, HttpParams } from "@angular/common/http";
import * as FileSaver from "file-saver";

@Injectable()
export class DocumentService extends BaseService {
    private url = AppSettings.API_ENDPOINT + "documents/";

    constructor(protected http: HttpClient, protected loader: SlimLoadingBarService) {
        super(http, loader);
    }

    get(documentTypeCode: string, klantId: number, abonnementWijzigingId?: number): Observable<IDocument> {
        var params = new HttpParams();
        if (documentTypeCode) params = params.set("documentTypeCode", documentTypeCode);
        if (klantId) params = params.set("klantId", klantId.toString());
        if (abonnementWijzigingId) params = params.set("abonnementWijzigingId", abonnementWijzigingId.toString());

        this.loader.start();
        return this.http.get<IDocument>(this.url, { headers: this.jsonHeaders, params: params }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError)
        )
    }

    saveDocument(document: IDocument): Observable<any> {
        this.loader.start();
        return this.http.post<any[]>(this.url, document, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError)
        );
    }

    downloadDocument(documentTypeCode: string, klantId: number, abonnementWijzigingId?: number): void {
        var params = new HttpParams();
        if (documentTypeCode) params = params.set("documentTypeCode", documentTypeCode);
        if (klantId) params = params.set("klantId", klantId.toString());
        if (abonnementWijzigingId) params = params.set("abonnementWijzigingId", abonnementWijzigingId.toString());

        this.loader.start();
        this.http.get(AppSettings.API_ENDPOINT + 'documentfiles/', { responseType: 'blob', observe: 'response', params: params }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError),
            map((res) => {
                return [new Blob([res.body], { type: 'application/octet-stream' }), res.headers.get("X-FILENAME")];
            })).subscribe((data: any) => {
                FileSaver.saveAs(data[0], `${data[1]}`);
            });
    }

    delete(documentTypeCode: string, klantId: number, abonnementWijzigingId?: number): Observable<any> {
        var params = new HttpParams();
        if (documentTypeCode) params = params.set("documentTypeCode", documentTypeCode);
        if (klantId) params = params.set("klantId", klantId.toString());
        if (abonnementWijzigingId) params = params.set("abonnementWijzigingId", abonnementWijzigingId.toString());

        this.loader.start();
        return this.http.post<any[]>(this.url, document, { headers: this.jsonHeaders, params: params }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError)
        );
    }
}

export interface IDocument {
    id?: number;
    klantId: number;
    abonnementStatusWijzigingId?: number;
    documentTypeCode: string;
    naam: string;
    fileExtension: string;
    bestand: any;
    geldigVan?: Date;
    geldigTot?: Date;
}