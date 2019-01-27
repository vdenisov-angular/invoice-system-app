import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { AbstractResourceService } from './abstract-resource.service';

import { ICustomer } from 'src/app/shared/types';


@Injectable({
  providedIn: 'root'
})
export class CustomersService extends AbstractResourceService<ICustomer> {

  constructor(
    protected apiService: ApiService
  ) {
    super('customers');
  }

}
