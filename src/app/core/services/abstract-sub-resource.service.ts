import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AbstractSubResourceService<T> {

  constructor(
    private parentEndpoint: string,
    private endpoint: string,
    protected apiService?: ApiService,
  ) { }

  public create(parentId: number, object: T): Observable<T> {
    const route = `${this.parentEndpoint}/${parentId}/${this.endpoint}`;
    return this.apiService.post(route, object);
  }

  public getAll(parentId: number): Observable<T[]> {
    const route = `${this.parentEndpoint}/${parentId}/${this.endpoint}`;
    return this.apiService.get(route);
  }

  public getById(parentId: number, id: number): Observable<T> {
    const route = `${this.parentEndpoint}/${parentId}/${this.endpoint}/${id}`;
    return this.apiService.get(route);
  }

  public updateById(parentId: number, id: number, object: T): Observable<T> {
    const route = `${this.parentEndpoint}/${parentId}/${this.endpoint}/${id}`;
    return this.apiService.put(route, object);
  }

  public deleteById(parentId: number, id: number): Observable<T> {
    const route = `${this.parentEndpoint}/${parentId}/${this.endpoint}/${id}`;
    return this.apiService.delete(route);
  }

}
