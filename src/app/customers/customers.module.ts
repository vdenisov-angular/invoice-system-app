import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomersComponent } from './customers.component';


const routes: Routes = [
  { path: '', component: CustomersComponent }
];


@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    CustomersComponent
  ]
})
export class CustomersModule { }
