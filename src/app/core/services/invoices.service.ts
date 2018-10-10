import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private apiService: ApiService) {}

  public create(data) {
    return this.apiService.post(`invoices`, data);
  }

  public getAll() {
    return this.apiService.get(`invoices`);
  }

  public getById(id) {
    return this.apiService.get(`invoices/${id}`);
  }

  public updateById(id, data) {
    return this.apiService.put(`invoices/${id}`, data);
  }

  public deleteById(id) {
    return this.apiService.delete(`invoices/${id}`);
  }

}
