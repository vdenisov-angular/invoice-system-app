import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { AbstractSubResourceService } from './abstract-sub-resource.service';

import { IInvoiceItem } from 'src/app/shared/types';


@Injectable({
  providedIn: 'root'
})
export class InvoiceItemsService extends AbstractSubResourceService<IInvoiceItem> {

  constructor(
    protected apiService: ApiService
  ) {
    super('invoices', 'items');
  }

}
