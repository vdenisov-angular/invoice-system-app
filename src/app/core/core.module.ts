import { NgModule, ModuleWithProviders } from '@angular/core';

import { HeaderComponent } from './header/header.component';

import {
  CustomersService,
  ProductsService,
  InvoicesService,
  InvoiceItemsService,
} from './services';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CustomersService,
        ProductsService,
        InvoicesService,
        InvoiceItemsService,
      ]
    };
  }
}
