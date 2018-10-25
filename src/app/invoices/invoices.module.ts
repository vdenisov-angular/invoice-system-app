import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { InvoicesComponent } from './invoices.component';
import { InvoiceItemsComponent } from '../invoice-items/invoice-items.component';

import { CustomerNamePipe } from './customer-name.pipe';
import { ProductNamePipe } from '../invoice-items/product-name.pipe';


const routes: Routes = [
  { path: '', component: InvoicesComponent },
  { path: ':id', component: InvoiceItemsComponent }
];


@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    InvoicesComponent,
    InvoiceItemsComponent,

    CustomerNamePipe,
    ProductNamePipe
  ]
})
export class InvoicesModule { }
