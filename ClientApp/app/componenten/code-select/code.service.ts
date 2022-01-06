
import { catchError, tap, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { AppSettings } from "../../app.settings";
import { Observable } from "rxjs";
import "rxjs/add/observable/of";
import { BaseService, IEnumerableResponse } from "../../core"
import "rxjs/add/operator/share";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";

@Injectable()
export class CodeService extends BaseService {
    private url = AppSettings.API_ENDPOINT + "codes/";

    constructor(protected http: HttpClient, protected loader: SlimLoadingBarService) {
        super(http, loader);
    }

    get(codeType: string, id: number): Observable<ICode> {
        return this.http.get<ICode>(this.url + id + '?code=' + codeType, { headers: this.jsonHeaders }).pipe(
            catchError(this.handleError));
    }

    getCodes(codeType: CodeType | string, showNonActive: boolean = false, clear: boolean = false): Observable<ICode[]> {
        const type = typeof codeType === "string" ? codeType : CodeType[codeType];
        var link = this.url + '?code=' + type + '&showNonActive=' + showNonActive;
        const obs: Observable<ICode[]> = this.http.get<IEnumerableResponse<ICode>>(link).pipe(
            map(response => 
                response.response)
            )
        if (clear) {
            this.clearCache(type);
        }
        return this.cacheResult<ICode[]>(type, obs);
    }

    save(codeType: string, payload: any, isPut: boolean = true): Observable<any> {
        this.loader.start();
        let action: Observable<any> = isPut
            ? this.http.put(this.url + codeType, payload)
            : this.http.post(this.url + "?code=" + codeType, payload);
        if (isPut) {
            return action.pipe(tap(x => { this.loader.complete(); }),
                catchError(this.handleError))
        }
        else {
            return action.pipe(tap(x => { this.loader.complete(); }),
                catchError(this.handleError))
        }
    }
    delete(code: string, codeId: number): Observable<any> {
        this.loader.start();
        return this.http.delete(this.url + '?code=' + code + "&codeId=" + codeId, { headers: this.jsonHeaders }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError));
    }
}

export interface ICode {
    id: number;
    code: string;
    omschrijving: string;
    actief: boolean;
}

export enum CodeType {
    Aanvraagsoort,
    Aanvraagstatus,
    Abonnementstatus,
    Abonnementstatuswijzigingaard,
    Abonnementstatuswijzigingreden,
    Dagvandeweek,
    Dieptekavelsapmateriaalcode,
    Dieptekavelstatus,
    District,
    Documenttype,
    Elektriciteit,
    ElektriciteitDagpas,
    Elektriciteitsapmateriaalcode,
    Factuuractietype,
    Factuurtype,
    Interval,
    Juridischeentiteit,
    Kavelstatus,
    Toepassinginstelling,
    Uitstalling,
    Verkoop
}
