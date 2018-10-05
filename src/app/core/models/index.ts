export interface ICustomer {
  id: number;
  name: string;
  address: string;
  phone: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
}

export interface IInvoice {
  id: number;
  customer_id: number;
  discount: number;
  total: number;
}

export interface IInvoiceItem {
  id: number;
  invoice_id: number;
  product_id: number;
  quantity: number;
}
