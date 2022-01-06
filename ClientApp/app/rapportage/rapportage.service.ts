
import { map, catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { Observable } from 'rxjs';
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import { BaseService } from '../core';
import { HttpClient } from "@angular/common/http";
import * as FileSaver from "file-saver";

@Injectable()
export class RapportageService extends BaseService {
    private url = AppSettings.API_ENDPOINT + "reports/";

    constructor(protected http: HttpClient, protected loader: SlimLoadingBarService) {
        super(http, loader);
    }
    download(type: string): void {
        this.loader.start();
        this.http.get(this.url + type, { headers: this.csvHeaders, observe: 'response', responseType: 'text' }).pipe(
            tap(x => this.loader.complete()),
            catchError(this.handleError),
            map((resp: any) => {
                var blob = new Blob([resp.body], { type: "text/csv" });
                var name = resp.headers.get("content-disposition");
                FileSaver.saveAs(blob, name.substr(name.lastIndexOf("'") + 1));
            }))
            .subscribe();
    }
}