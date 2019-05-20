import { Routes, Route } from "@angular/router";

import { InvoiceListComponent } from "./components/invoice-list/invoice-list.component";
import { InvoiceEditComponent } from "./components/invoice-edit/invoice-edit.component";

export const invoiceRoutes: Routes = [
  {
    path: 'invoices',
    children: [
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
