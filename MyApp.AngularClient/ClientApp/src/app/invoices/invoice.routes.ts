import { Routes, Route } from "@angular/router";

import { InvoiceComponent } from "./invoice.component";

import { InvoiceDashboardComponent } from "./components/invoice-dashboard/invoice-dashboard.component";
import { InvoiceListComponent } from "./components/invoice-list/invoice-list.component";
import { InvoiceEditComponent } from "./components/invoice-edit/invoice-edit.component";

export const invoiceRoutes: Routes = [
  {
    path: 'invoices',
    component: InvoiceComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: InvoiceDashboardComponent
      },
      {
        path: 'list',
        component: InvoiceListComponent
      },
      {
        path: 'edit/:id',
        component: InvoiceEditComponent
      }
    ]
  }
  ]
