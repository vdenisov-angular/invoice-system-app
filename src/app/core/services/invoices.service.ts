import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

import { Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  public needToUpdate$ = new BehaviorSubject(true);

  public needToReload$ = new BehaviorSubject(true);

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
