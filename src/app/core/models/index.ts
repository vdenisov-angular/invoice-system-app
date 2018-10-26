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
  total: number;
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

export class InvoiceItem implements IInvoiceItem {

  public invoice_id = 0;
  public product_id = 0;
  public quantity = 0;
  public total = 0;

  constructor(itemObject?: IInvoiceItem) {
    if (itemObject) {
      this.invoice_id = itemObject.invoice_id;
      this.product_id = itemObject.product_id;
      this.quantity = itemObject.quantity;
    }
  }

  // public updateInvoiceId(id: number): void {
  //   this.invoice_id = id;
  // }

}

