
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IConfig } from './config';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ConfigService {

    constructor(private _http: HttpClient) { }

    /**
     * Get config values from json
     */
    public getConfig() : Observable<IConfig>
    {
         return this._http.get<IConfig>("config.json").pipe(
                tap(data => console.log('All: ' + JSON.stringify(data))),
                catchError(this.handleError),);       
    }

    /**
     * Handle error when json file is brak
     */
    private handleError(error: any){
        console.error(error);
        return observableThrowError(error.error || 'Server error');
    }
}