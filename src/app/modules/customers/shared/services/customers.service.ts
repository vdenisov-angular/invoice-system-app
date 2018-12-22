import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private apiService: ApiService) {}

  public create(data) {
    return this.apiService.post(`customers`, data);
  }

  public getAll() {
    return this.apiService.get(`customers`);
  }

  public getById(id) {
    return this.apiService.get(`customers/${id}`);
  }

  public updateById(id, data) {
    return this.apiService.put(`customers/${id}`, data);
  }

  public deleteById(id) {
    return this.apiService.delete(`customers/${id}`);
  }

}
