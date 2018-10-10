import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ConfirmDeleteComponent,

  CustomersCreateUpdateComponent,
} from './modals';


@NgModule({
  declarations: [
    ConfirmDeleteComponent,

    CustomersCreateUpdateComponent,
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
  ],
  exports: [
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
