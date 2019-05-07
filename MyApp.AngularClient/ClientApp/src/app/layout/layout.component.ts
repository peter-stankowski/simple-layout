import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

// service
import { LayoutService } from '../service/layout.service';

// models
import { LayoutModel } from '../service/layout.service';
import { NavItem } from '../interfaces/nav-item';

// routes
import { appNav } from '../app.routes';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
/** topbar component*/
export class LayoutComponent {
    /** topbar ctor */
  constructor(private layoutService: LayoutService) {

  }

  layouts: LayoutModel[] = [];
  layout: any = {};
  items: any[]

  //temp var
  newItems: any;
  ngOnInit() {

    this.layoutService.getNavItems()
      .subscribe((navItems: NavItem[]) => {        
        this.items = navItems;
      })

    this.layoutService.getLayout().subscribe(x => {
      this.layouts = x;
      //this.items = appNav;     
    });
  };

  onToggleLayout(layout) {
    this.layout = layout;
  }
}
