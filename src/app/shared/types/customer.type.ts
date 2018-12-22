export interface ICustomer {
  id?: number;
  name: string;
  phone: string;
  address: string;
}

export class Customer implements ICustomer {

  public name = '';
  public phone = '';
  public address = '';

  constructor(customerObject?: ICustomer) {
    if (customerObject) {
      this.name = customerObject.name;
      this.phone = customerObject.phone;
      this.address = customerObject.address;
    }
  }

}
