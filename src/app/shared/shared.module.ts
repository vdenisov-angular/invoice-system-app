import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  HomeComponent,
} from './layout';

import {
  ConfirmDeleteComponent,

  ProductsCreateUpdateComponent,
  InvoicesCreateUpdateComponent,

  DialogCreateUpdateComponent,
  SelectInvoiceItemsComponent,

  ItemsCreateUpdateComponent,
} from './modals';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// import {  } from './modals/select-invoice-items/select-invoice-items.component';


@NgModule({
  declarations: [
    HomeComponent,

    ConfirmDeleteComponent,

    ProductsCreateUpdateComponent,
    InvoicesCreateUpdateComponent,

    DialogCreateUpdateComponent,

    SelectInvoiceItemsComponent,

    ItemsCreateUpdateComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    NgbModule,
    NgxDatatableModule,
  ],
  entryComponents: [
    ConfirmDeleteComponent,

    ProductsCreateUpdateComponent,
    InvoicesCreateUpdateComponent,

    DialogCreateUpdateComponent,

    SelectInvoiceItemsComponent,

    ItemsCreateUpdateComponent,
  ],
  exports: [
    HomeComponent,

    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    NgbModule,
    NgxDatatableModule,
  ]
})
export class SharedModule { }
