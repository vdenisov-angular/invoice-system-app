import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/layout';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'customers',  loadChildren: './modules/customers/customers.module#CustomersModule' },
  { path: 'products',   loadChildren: './modules/products/products.module#ProductsModule' },
  { path: 'invoices',   loadChildren: './invoices/invoices.module#InvoicesModule' },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
