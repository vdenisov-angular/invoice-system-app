import { Pipe, PipeTransform } from '@angular/core';
import { CustomersService } from '../core/services';

@Pipe({
  name: 'customerName'
})
export class CustomerNamePipe implements PipeTransform {

  constructor(
    private customersService: CustomersService,
  ) { }

  transform(value: any, args?: any): any {
    return this.customersService.getById(value)
  }

}
