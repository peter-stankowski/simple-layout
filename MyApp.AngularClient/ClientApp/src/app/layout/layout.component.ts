import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

// service
import { LayoutService } from '../service/layout.service';

// models
import { LayoutModel } from '../service/layout.service';

// routes
import { appRoutes } from '../app.routes';

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
  routes: Route[]

  ngOnInit() {
    this.layoutService.getLayout().subscribe(x => {
      this.layouts = x;
      this.routes = appRoutes;
    });
  };

  onToggleLayout(layout) {
    this.layout = layout;
  }
}
