import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

//service
import { LayoutService } from '../service/layout.service';
import { LayoutModel } from '../service/layout.service';

// routes
import { layoutRoutes } from './layout.routes';

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
      this.routes = layoutRoutes;
    });
  };

  onToggleLayout(layout) {
    this.layout = layout;
  }
}
