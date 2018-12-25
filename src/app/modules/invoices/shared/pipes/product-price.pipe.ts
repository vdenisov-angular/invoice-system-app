import { Pipe, PipeTransform } from '@angular/core';
import { ProductsService } from 'src/app/core/services';


@Pipe({
  name: 'productPrice'
})
export class ProductPricePipe implements PipeTransform {

  constructor(
    private productService: ProductsService,
  ) { }

  transform(value: any, count: number): any {
    return this.productService.getById(value);
  }
}
