import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from '../shared/modules/material.module';
import { FormsComponent } from './forms.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModules
  ],
  declarations: [
    FormsComponent,
    FormBuilderComponent
  ],
  exports: [
    FormsComponent
  ]
})

export class FormsModule { }
