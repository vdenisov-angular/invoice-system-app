import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/layout';

import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/:id', component: CustomerPageComponent },
  { path: 'products', component: ProductsComponent },
  // { path: '**', redirectTo: 'customers' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
