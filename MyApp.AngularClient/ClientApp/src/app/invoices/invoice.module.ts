import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// material
import { MaterialModules } from '../shared/modules/material.module';

// components
import { InvoiceComponent } from "./invoice.component";
import { InvoiceDashboardComponent } from "./components/invoice-dashboard/invoice-dashboard.component";
import { InvoiceEditComponent } from "./components/invoice-edit/invoice-edit.component";
import { InvoiceListComponent } from "./components/invoice-list/invoice-list.component";
import { ContextMenuComponent } from "../shared/components/context-menu/context-menu.component";

// routes
import { invoiceRoutes } from "./invoice.routes";

// directives
import { FullWidthDirective } from "../shared/directives/full-width.directive";


@NgModule({
  imports: [
    CommonModule,
    MaterialModules,
    RouterModule.forRoot(invoiceRoutes)
  ],
  declarations: [
    InvoiceComponent,
    InvoiceDashboardComponent,
    InvoiceEditComponent,
    InvoiceListComponent,
    FullWidthDirective,
    ContextMenuComponent
  ],
  exports: [
    RouterModule,
    InvoiceComponent
  ]
})
export class InvoiceModule {
}
