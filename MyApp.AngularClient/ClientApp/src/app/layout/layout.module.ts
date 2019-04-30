import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from '../shared/modules/material.module';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModules,
    RouterModule
  ],
  declarations: [LayoutComponent, SidebarComponent, TopbarComponent, HomeComponent],
  exports: [
    RouterModule,
    LayoutComponent
  ]
})
export class LayoutModules { }


