
import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { AppSettings } from "../../app.settings";
import { Observable } from "rxjs";
import "rxjs/add/observable/of";
import "rxjs/add/operator/share";
import { HttpClient, HttpParams } from "@angular/common/http";
import { BaseService, IPagedResult } from "../../core"
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { IPage } from "../datagrid/datagrid.models";
/**
 * OPGELET!!!
 * Deze service is bedoeld om enkel gebruikt te worden binnen deze module.
 * Ze wordt dan ook niet geexporteerd in de index.
 */

@Injectable()
export class ProductService extends BaseService {
    private url = AppSettings.API_ENDPOINT + "products/";

    constructor(protected http: HttpClient, protected loader: SlimLoadingBarService) {
        super(http, loader);
    }

    get(): Observable<IProduct[]> {
        var params = new HttpParams().set("page", "1")
            .set("pagesize", "9999");

        var obs = this.http.get<IPagedResult<IProduct>>(this.url, { headers: this.jsonHeaders, params: params });
        return this.cacheResult<IPagedResult<IProduct>>("products", obs).pipe(map(result => result.embedded.resourceList));
    }
}

export interface IProduct {
    id: number;
    omschrijving: string;
    geldigVan: Date;
    geldigTot: Date;

}
