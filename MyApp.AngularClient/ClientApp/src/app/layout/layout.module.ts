import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from '../shared/modules/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NavbarItemComponent } from './shared/navbar-item.component';
import { ConfigComponent } from './components/config/config.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModules,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    TopbarComponent,
    HomeComponent,
    NavbarItemComponent,
    ConfigComponent    
  ],
  exports: [
    RouterModule,
    LayoutComponent
  ]
})
export class LayoutModules { }


