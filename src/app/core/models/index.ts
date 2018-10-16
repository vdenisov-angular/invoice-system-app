// INTERFACES

export interface ICustomer {
  id?: number;
  name: string;
  phone: string;
  address: string;
}

export interface IProduct {
  id?: number;
  name: string;
  price: number;
}

export interface IInvoice {
  id?: number;
  customer_name?: string;
  customer_id: number;
  discount: number;
  total: number;
}

export interface IInvoiceItem {
  id?: number;
  invoice_id: number;
  product_id: number;
  quantity: number;
}

// CLASSES

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

export class Product implements IProduct {

  public name = '';
  public price = 0;

  constructor(productObject?: IProduct) {
    if (productObject) {
      this.name = productObject.name;
      this.price = productObject.price;
    }
  }

}

export class Invoice implements IInvoice {

  public customer_id = 0;
  public discount = 0;
  public total = 0;

  constructor(invoiceObject?: IInvoice) {
    if (invoiceObject) {
      this.customer_id = invoiceObject.customer_id;
      this.discount = invoiceObject.discount;
      this.total = invoiceObject.total;
    }
  }

}
