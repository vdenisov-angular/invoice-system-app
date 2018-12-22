import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';

import { CustomersComponent } from './pages';
import { CustomersCreateUpdateComponent } from './components';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CustomersRoutingModule,
  ],
  declarations: [
    CustomersComponent,
    CustomersCreateUpdateComponent,
  ],
  entryComponents: [
    CustomersCreateUpdateComponent,
  ],
})
export class CustomersModule { }
