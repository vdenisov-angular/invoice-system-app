import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CustomersComponent } from './pages';
import { CustomersCreateUpdateComponent } from './components';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  { path: '', component: CustomersComponent }
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
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
