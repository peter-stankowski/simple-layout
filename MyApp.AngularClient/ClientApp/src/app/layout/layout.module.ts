import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from '../shared/modules/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarItemComponent } from './shared/navbar-item.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModules,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    TopbarComponent,
    HomeComponent,
    NavbarItemComponent
  ],
  exports: [
    RouterModule,
    LayoutComponent
  ]
})
export class LayoutModules { }


