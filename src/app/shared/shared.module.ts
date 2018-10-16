import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  HeaderComponent,
  HomeComponent,
} from './layout';

import {
  ConfirmDeleteComponent,

  CustomersCreateUpdateComponent,
  ProductsCreateUpdateComponent,
  InvoicesCreateUpdateComponent,

  DialogCreateUpdateComponent,
} from './modals';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectInvoiceItemsComponent } from './modals/select-invoice-items/select-invoice-items.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,

    ConfirmDeleteComponent,

    CustomersCreateUpdateComponent,
    ProductsCreateUpdateComponent,
    InvoicesCreateUpdateComponent,

    DialogCreateUpdateComponent,

    SelectInvoiceItemsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    NgbModule
  ],
  entryComponents: [
    ConfirmDeleteComponent,

    CustomersCreateUpdateComponent,
    ProductsCreateUpdateComponent,
    InvoicesCreateUpdateComponent,

    DialogCreateUpdateComponent,

    SelectInvoiceItemsComponent,
  ],
  exports: [
    HeaderComponent,
    HomeComponent,

    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    NgbModule,
  ]
})
export class SharedModule { }
