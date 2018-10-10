import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ConfirmDeleteComponent,
  EditWindowComponent,
} from './modals';


@NgModule({
  declarations: [
    ConfirmDeleteComponent,
    EditWindowComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    ConfirmDeleteComponent,
    EditWindowComponent,
  ],
  exports: [
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
