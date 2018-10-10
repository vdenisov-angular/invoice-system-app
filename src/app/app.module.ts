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


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerPageComponent,
    ProductsComponent,
  ],
  imports: [
    NgbModule,
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
