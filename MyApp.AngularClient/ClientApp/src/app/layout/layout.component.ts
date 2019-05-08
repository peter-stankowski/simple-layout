import { Component, Input } from '@angular/core';

// service
import { LayoutService } from './layout.service';

// models
import { PageLayout, LayoutTemplates, LayoutThemes } from './models/layout.model';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
/** topbar component*/
export class LayoutComponent {
  layout: PageLayout = new PageLayout();
  layoutTemplates = LayoutTemplates;
  layoutThemes = LayoutThemes
   
  constructor(private layoutService: LayoutService) {

  }
 
  ngOnInit() {
    this.layoutService.getLayout(LayoutTemplates.Sidebar).subscribe(res => {
      this.layout = res;  
    });
  };

  onLayoutChange($event: PageLayout) {
    this.layout = $event;
  }

}
