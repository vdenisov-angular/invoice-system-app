import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/layout';

import { ProductsComponent } from './products/products.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceItemsComponent } from './invoice-items/invoice-items.component';


// TODO: add children routes

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
  { path: 'products', component: ProductsComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoices/:id', component: InvoiceItemsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
