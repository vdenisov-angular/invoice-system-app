import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { AbstractResourceService } from './abstract-resource.service';

import { IProduct } from 'src/app/shared/types';


@Injectable({
  providedIn: 'root'
})
export class ProductsService extends AbstractResourceService<IProduct> {

  constructor(
    protected apiService: ApiService
  ) {
    super('products');
  }

}
