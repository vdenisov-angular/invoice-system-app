import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/layout';

import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceItemsComponent } from './invoice-items/invoice-items.component';

// TODO: add children routes

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/:id', component: CustomerPageComponent },
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
