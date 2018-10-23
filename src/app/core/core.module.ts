import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  CustomersService,
  ProductsService,
  InvoicesService,
  InvoiceItemsService,
} from './services';


@NgModule({ })
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
