import { Component, Output, EventEmitter } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

// models
import { PageLayout } from '../../models/layout.model';
// service
import { LayoutService } from '../../layout.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-layout-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
/** topbar component*/
export class ConfigComponent {
  layouts: PageLayout[] = [];
  @Output() layoutChange: EventEmitter<PageLayout> = new EventEmitter();


  /** topbar ctor */
  constructor(private layoutService: LayoutService) {

  }

  //temp var
  ngOnInit() {
    this.layoutService.getLayouts().subscribe(x => {
      this.layouts = x;
    });
  };

  onToggleLayout(layout: PageLayout) {
    console.log(layout);
    this.layoutChange.emit(layout);
  }
  
}
