import { Injectable } from '@angular/core';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService: ApiService) {}

  public create(data) {
    return this.apiService.post(`products`, data);
  }

  public getAll() {
    return this.apiService.get(`products`);
  }

  public getById(id) {
    return this.apiService.get(`products/${id}`);
  }

  public updateById(id, data) {
    return this.apiService.put(`products/${id}`, data);
  }

  public deleteById(id) {
    return this.apiService.delete(`products/${id}`);
  }

}
