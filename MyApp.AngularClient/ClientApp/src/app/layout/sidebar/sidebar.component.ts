import { Component, NgModule, Input } from '@angular/core';

import { layoutRoutes } from '../layout.routes';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']

})
/** sidebar component*/
export class SidebarComponent {
  @Input() routes: Route[];

  /** sidebar ctor */
  constructor() {
    
  }

  ngOnInit() {
    console.log(this.routes);
  }
}
