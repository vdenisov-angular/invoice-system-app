import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class InvoiceItemsService {

  constructor(private apiService: ApiService) {}

  public create(invoiceId, data) {
    return this.apiService.post(`invoices/${invoiceId}/items`, data);
  }

  public getAll(invoiceId) {
    return this.apiService.get(`invoices/${invoiceId}/items`);
  }

  public getById(invoiceId, itemId) {
    return this.apiService.get(`invoices/${invoiceId}/items/${itemId}`);
  }

  public updateById(invoiceId, itemId, data) {
    return this.apiService.put(`invoices/${invoiceId}/items/${itemId}`, data);
  }

  public deleteById(invoiceId, itemId) {
    return this.apiService.delete(`invoices/${invoiceId}/items/${itemId}`);
  }

}
