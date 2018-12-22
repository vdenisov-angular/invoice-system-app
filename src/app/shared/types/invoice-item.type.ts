export interface IInvoiceItem {
  id?: number;
  total: number | string;
  invoice_id: number;
  product_id: number;
  quantity: number;
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

}
