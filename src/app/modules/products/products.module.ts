import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './pages';
import { ProductsCreateUpdateComponent } from './components';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
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
