import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProductsComponent } from './products.component';


const routes: Routes = [
  { path: '', component: ProductsComponent }
];


@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ProductsComponent
  ]
})
export class ProductsModule { }
