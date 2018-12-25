import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { InvoicesRoutingModule } from './invoices-routing.module';

import {
  InvoicesComponent,
  InvoiceItemsComponent,
} from './pages';

import {
  InvoicesCreateUpdateComponent,
  ItemsCreateUpdateComponent,
  SelectInvoiceItemsComponent,
} from './components';

import {
  CustomerNamePipe,
  ProductNamePipe
} from './shared/pipes';
import { ProductPricePipe } from './shared/pipes/product-price.pipe';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InvoicesRoutingModule,
  ],
  declarations: [
    InvoicesComponent,
    InvoiceItemsComponent,

    InvoicesCreateUpdateComponent,
    ItemsCreateUpdateComponent,
    SelectInvoiceItemsComponent,

    CustomerNamePipe,
    ProductNamePipe,
    ProductPricePipe
  ],
  entryComponents: [
    InvoicesCreateUpdateComponent,
    ItemsCreateUpdateComponent,
    SelectInvoiceItemsComponent,
  ],
})
export class InvoicesModule { }
