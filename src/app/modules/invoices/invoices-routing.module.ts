import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicesComponent, InvoiceItemsComponent } from './pages';


const routes: Routes = [
  { path: '', component: InvoicesComponent },
  { path: ':id', component: InvoiceItemsComponent },
  { path: '**', redirectTo: '' },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class InvoicesRoutingModule { }
