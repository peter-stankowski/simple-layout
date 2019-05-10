import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from '../shared/modules/material.module';
import { FormsComponent } from './forms.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModules,
  ],
  declarations: [
    FormsComponent
  ],
  exports: [
    FormsComponent
  ]
})

export class FormsModule { }
