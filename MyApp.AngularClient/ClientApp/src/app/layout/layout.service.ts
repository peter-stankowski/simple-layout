import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';

// generic service
import { ApiService } from "../shared/service/apiService";


@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor(private _http: HttpClient, private _apiService: ApiService) {

  }

  getLayouts = () => {
    var data = this._apiService.get("Layout", "GetLayouts", null);

    return data;
  }

  getLayout = (id) => {
    var data = this._apiService.get("Layout", "GetLayout", { layoutTemplate: id });

    return data;
  }

}
