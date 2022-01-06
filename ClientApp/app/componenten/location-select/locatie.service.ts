
import { map, tap, catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { AppSettings } from "../../app.settings";
import { Observable } from "rxjs";
import { BaseService, IPagedResult } from "../../core"
import { ILocatie } from "./locatie";
import { HttpClient, HttpParams } from "@angular/common/http";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";

@Injectable()
export class LocatieService extends BaseService {
    private url = AppSettings.API_ENDPOINT + "locations";
    constructor(protected http: HttpClient, protected loader: SlimLoadingBarService) {
        super(http, loader);
    }

    getLocaties(clear: boolean = false): Observable<ILocatie[]> {
        this.loader.start();

        var params = new HttpParams();
        params = params.set("page", "1");
        params = params.set("pageSize", Number.MAX_SAFE_INTEGER.toString());

        const obs = this.http.get<any>(this.url, { headers: this.jsonHeaders, params: params }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
        if (clear) {
            this.clearCache("locatie");
        }
        return this.cacheResult<IPagedResult<ILocatie>>("locatie", obs).pipe(map(result => {
            return result.embedded.resourceList;
        }));
    }

    save(payload: any): Observable<any> {
        this.loader.start();

        let action: Observable<Response> = payload.id == 0
            ? this.http.post<Response>(this.url, payload)
            : this.http.put<Response>(this.url, payload);
        return action.pipe(tap(x => { this.loader.complete(); }),
            catchError(this.handleError));
    }

    delete(itemId: number): Observable<any> {
        this.loader.start();
        return this.http.delete(this.url + "/" + itemId, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }

}
