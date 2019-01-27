import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export abstract class AbstractResourceService<T> {

  constructor(
    private endpoint: string,
    protected apiService?: ApiService,
  ) { }

  public create(object: T): Observable<T> {
    return this.apiService.post(this.endpoint, object);
  }

  public getById(id: number): Observable<T> {
    return this.apiService.get(`${this.endpoint}/${id}`);
  }

  public getAll(): Observable<T[]> {
    return this.apiService.get(this.endpoint);
  }

  public updateById(id: number, object: T): Observable<T> {
    return this.apiService.put(this.endpoint, object);
  }

  public deleteById(id: number): Observable<T> {
    return this.apiService.delete(`${this.endpoint}/${id}`);
  }

}
