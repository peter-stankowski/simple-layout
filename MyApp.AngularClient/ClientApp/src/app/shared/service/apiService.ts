import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// env
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ApiService{
  constructor(private _http: HttpClient) {

  }

  get(controller: string, action: string, parameters: HttpParams): Observable<any> {
    var options = {
      headers: new HttpHeaders({}),
      params: parameters
    };

    return this._http.get(
      `${environment.apiUrl}/${controller}/${action}`,
      options
    );
  }

}
