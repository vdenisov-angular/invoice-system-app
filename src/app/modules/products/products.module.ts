import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './pages';
import { ProductsCreateUpdateComponent } from './components';


const routes: Routes = [
  { path: '', component: ProductsComponent }
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ProductsComponent,
    ProductsCreateUpdateComponent,
  ],
  entryComponents: [
    ProductsCreateUpdateComponent,
  ]
})
export class ProductsModule { }
