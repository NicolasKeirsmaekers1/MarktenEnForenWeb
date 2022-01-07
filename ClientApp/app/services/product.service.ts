import { map, tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';
import { IProduct } from './product';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { BaseService } from '../core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ProductService extends BaseService {
  private url = AppSettings.API_ENDPOINT + 'products';

  constructor(
    protected http: HttpClient,
    protected loader: SlimLoadingBarService
  ) {
    super(http, loader);
  }

  getProducten(query?: any): Observable<IProduct[]> {
    this.loader.start();

    var httpParams = new HttpParams();
    if (query) {
      if (query.sort)
        httpParams = httpParams.set('sort', query.sort.toString());
      if (query.page)
        httpParams = httpParams.set('page', query.page.toString());
      if (query.pageSize)
        httpParams = httpParams.set('pageSize', query.pageSize.toString());
    }

    return this.http.get<any>(this.url + '/', { params: httpParams }).pipe(
      map((response: any) => response.embedded.resourceList),
      tap((x) => this.loader.complete()),
      catchError(this.handleError)
    );
  }

  updateWithArray(payload: IProduct[]): Observable<any> {
    this.loader.start();
    return this.http
      .post<Response>(this.url + '/update', payload, {
        headers: this.jsonHeaders,
      })
      .pipe(
        tap((x) => {
          this.loader.complete();
        }),
        catchError(this.handleError)
      );
  }

  update(payload: IProduct): Observable<any> {
    this.loader.start();
    return this.http
      .put<Response>(this.url + '/' + payload.id, payload, {
        headers: this.jsonHeaders,
      })
      .pipe(
        tap((x) => {
          this.loader.complete();
        }),
        catchError(this.handleError)
      );
  }

  save(payload: IProduct): Observable<any> {
    this.loader.start();
    return this.http
      .post<Response>(this.url, payload, { headers: this.jsonHalHeaders })
      .pipe(
        tap((x) => {
          this.loader.complete();
        }),
        catchError(this.handleError)
      );
  }

  delete(itemId: number): Observable<any> {
    this.loader.start();
    return this.http
      .delete(this.url + '/' + itemId, { headers: this.jsonHeaders })
      .pipe(
        tap((x) => this.loader.complete()),
        catchError(this.handleError)
      );
  }
}
