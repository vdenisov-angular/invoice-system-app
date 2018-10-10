import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ConfirmDeleteComponent,

  CustomersCreateUpdateComponent,
  ProductsCreateUpdateComponent,
} from './modals';


@NgModule({
  declarations: [
    ConfirmDeleteComponent,

    CustomersCreateUpdateComponent,
    ProductsCreateUpdateComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    ConfirmDeleteComponent,

    CustomersCreateUpdateComponent,
    ProductsCreateUpdateComponent,
  ],
  exports: [
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
