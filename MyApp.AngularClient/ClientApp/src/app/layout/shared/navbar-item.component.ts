import { Component, Input, ViewChild  } from '@angular/core';
import { Route } from "@angular/router";

@Component({
    selector: 'navbar-item',
    templateUrl: './navbar-item.component.html'
    //styleUrls: ['./layout.component.scss']
})
/** topbar component*/
export class NavbarItemComponent {
  @Input('items')
  public items: any[];

  @ViewChild('childMenu')
  public childMenu;


    /** topbar ctor */
  constructor() {

  }

  
}
