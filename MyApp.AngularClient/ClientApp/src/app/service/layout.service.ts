import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
    constructor() {

  }

  getLayout(): Observable<LayoutModel[]> {
    let data = [
      new LayoutModel("layout-sidebar", null),
      new LayoutModel("layout-topbar", null)
    ];

    return of(data);
  }

}

export class LayoutModel {
  selector: string;
  navItems: object[];
  

  constructor(selector: string, navItems: object[]) {
    this.selector = selector;
    this.navItems = navItems;
  }

}
