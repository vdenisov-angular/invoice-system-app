import { NgModule, ModuleWithProviders } from '@angular/core';

import { CustomersService } from './services/customers.service';

@NgModule({ })
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CustomersService
      ]
    };
  }
}
