import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { ProductsComponent } from './products/products.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceItemsComponent } from './invoice-items/invoice-items.component';

import { CustomerNamePipe } from './invoices/customer-name.pipe';
import { ProductNamePipe } from './invoice-items/product-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerPageComponent,
    ProductsComponent,
    InvoicesComponent,
    InvoiceItemsComponent,

    CustomerNamePipe,
    ProductNamePipe,
  ],
  imports: [
    NgxDatatableModule,

    BrowserModule,
    BrowserAnimationsModule,

    SharedModule,
    CoreModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
