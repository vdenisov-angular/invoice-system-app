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

  public getById(invoiceId, id) {
    return this.apiService.get(`invoices/${invoiceId}/items/${id}`);
  }

  public updateById(invoiceId, id, data) {
    return this.apiService.put(`invoices/${invoiceId}/items/${id}`, data);
  }

  public deleteById(invoiceId, id) {
    return this.apiService.delete(`invoices/${invoiceId}/items/${id}`);
  }

}
