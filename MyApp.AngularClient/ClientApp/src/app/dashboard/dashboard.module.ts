import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from '../shared/modules/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModules,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    RouterModule,
    DashboardComponent
  ]
})
export class DashboardModules { }


