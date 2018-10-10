import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  CustomersService,
  ProductsService
} from './services';


@NgModule({ })
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CustomersService,
        ProductsService,
      ]
    };
  }
}
