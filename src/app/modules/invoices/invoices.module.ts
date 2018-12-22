import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { InvoicesComponent, InvoiceItemsComponent } from './pages';
import { CustomerNamePipe, ProductNamePipe } from './shared/pipes';


const routes: Routes = [
  { path: '', component: InvoicesComponent },
  { path: ':id', component: InvoiceItemsComponent }
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    InvoicesComponent,
    InvoiceItemsComponent,

    CustomerNamePipe,
    ProductNamePipe
  ]
})
export class InvoicesModule { }
