import { Component, NgModule, Input } from '@angular/core';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']

})
/** sidebar component*/
export class SidebarComponent {
  @Input() items: any[];

  /** sidebar ctor */
  constructor() {
    
  }

  ngOnInit() {
    
  }

  toggleSidenav(e: any, sidenav: any) {
    sidenav.toggle();
  }

}