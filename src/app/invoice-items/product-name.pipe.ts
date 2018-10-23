import { Pipe, PipeTransform } from '@angular/core';
import { ProductsService } from '../core/services';

@Pipe({
  name: 'productName'
})
export class ProductNamePipe implements PipeTransform {

  constructor(
    private productService: ProductsService,
  ) { }

  transform(value: any, args?: any): any {
    return this.productService.getById(value)
  }

}
