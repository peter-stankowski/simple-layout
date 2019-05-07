import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

// service
import { LayoutService } from '../service/layout.service';

// models
import { PageLayout } from './models/layout.model';
import { NavItem } from './models/navbar.model';

// routes
import { appNav } from '../app.routes';
import { Observable } from 'rxjs';

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

  layouts: PageLayout[] = [];
  layout: PageLayout = new PageLayout();
  items: any[];

  //temp var
  ngOnInit() {

    //this.layoutService.getNavItems()
    //  .subscribe((navItems: NavItem[]) => {        
    //    this.items = navItems;
    //    console.log(navItems);
    //  })

    this.layoutService.getLayouts().subscribe(x => {
      this.layouts = x;
      //this.items = appNav;     
    });
  };

  onToggleLayout(layout) {
    this.layout = layout;
  }
}
