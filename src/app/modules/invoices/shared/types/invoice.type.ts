export interface IInvoice {
  id?: number;
  customer_name?: string;
  customer_id: number;
  discount: number;
  total: number;
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
