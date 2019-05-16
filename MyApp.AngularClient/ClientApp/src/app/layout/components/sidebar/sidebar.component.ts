import { Component, NgModule, Input } from '@angular/core';


@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']

})
/** sidebar component*/
export class SidebarComponent {
  @Input() items: any[];

  viewState: string = 'closed';
  showFiller: boolean = false;

  /** sidebar ctor */
  constructor() {
    
  }

  ngOnInit() {
    
  }

  toggleSidenav(e: any, sidenav: any) {
    this.viewState = (this.viewState == 'closed') ? 'opened' : 'closed';

  }

}
