export interface IProduct {
  id?: number;
  name: string;
  price: number;
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
