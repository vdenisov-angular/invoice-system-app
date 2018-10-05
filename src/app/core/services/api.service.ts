import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private host = 'http://localhost:5000/api';
  private host = 'https://vdenisov-assessment-api.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  public get(route, params?): Observable<any> {
    return this.http.get(`${this.host}/${route}`, params);
  }

  public post(route, data, params?): Observable<any> {
    return this.http.post(`${this.host}/${route}`, data, params);
  }

  public put(route, data, params?): Observable<any> {
    return this.http.put(`${this.host}/${route}`, data, params);
  }

  public delete(route, params?): Observable<any> {
    return this.http.delete(`${this.host}/${route}`, params);
  }
}
