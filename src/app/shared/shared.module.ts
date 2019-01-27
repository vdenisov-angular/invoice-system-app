import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import {
  HeaderComponent,
  HomeComponent,
} from './layout';

import {
  ConfirmDeleteComponent,
} from './modals';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,

    ConfirmDeleteComponent,
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
  ],
  exports: [
    HeaderComponent,
    HomeComponent,

    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    NgbModule,
    NgxDatatableModule,
  ]
})
export class SharedModule { }
