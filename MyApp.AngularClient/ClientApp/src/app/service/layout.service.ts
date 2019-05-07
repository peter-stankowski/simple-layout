import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

// generic service
import { ApiService } from "../shared/service/apiService";


@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor(private _http: HttpClient, private _apiService: ApiService) {

  }

  getLayout(): Observable<LayoutModel[]> {
    let data = [
      new LayoutModel("layout-sidebar", null),
      new LayoutModel("layout-topbar", null)
    ];

    return of(data);
  }

  //todo - api urls will be global environment variables
  getNavItems = () => {
    return this._apiService.get("Layout", "GetNavItems", null);
    //return this._http.get(
    //  `${environment.apiUrl}/Layout/api/Layout/GetNavItems`
    //)
  }
  //Access-Control-Allow-Origin
}

export class LayoutModel {
  selector: string;
  navItems: object[];
  

  constructor(selector: string, navItems: object[]) {
    this.selector = selector;
    this.navItems = navItems;
  }

}
