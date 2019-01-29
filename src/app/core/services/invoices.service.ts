import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { AbstractResourceService } from './abstract-resource.service';

import { IInvoice } from 'src/app/shared/types';


@Injectable({
  providedIn: 'root'
})
export class InvoicesService extends AbstractResourceService<IInvoice> {

  constructor(
    protected apiService: ApiService
  ) {
    super('invoices');
  }

}
