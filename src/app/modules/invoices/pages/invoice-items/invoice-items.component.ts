import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { IInvoice, IInvoiceItem, InvoiceItem, IProduct } from 'src/app/shared/types';
import { InvoicesService, InvoiceItemsService, ProductsService } from 'src/app/core/services';
import { ConfirmDeleteComponent } from 'src/app/shared/modals';
import { ItemsCreateUpdateComponent } from './../../components';


interface ICustomInvItem {
  _id: number,
  item: IInvoiceItem,
  product: IProduct,
}

@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.css']
})
export class InvoiceItemsComponent implements OnInit {

  @ViewChild('customTotalPriceTmpl') customTotalPriceTmpl: TemplateRef<any>;
  @ViewChild('customItemPriceTmpl') customItemPriceTmpl: TemplateRef<any>;
  @ViewChild('customActionTmpl') customActionTmpl: TemplateRef<any>;
  @ViewChild('multipleTmpl') multipleTmpl: TemplateRef<any>;
  @ViewChild('equalityTmpl') equalityTmpl: TemplateRef<any>;

  public invoiceId: number;
  public invoice: IInvoice;

  public customInvArray$ = new BehaviorSubject<ICustomInvItem[]>([]);
  public customTableColumns = [];

  public loadingIndicator;
  public totalPrice = 0;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private invoicesService: InvoicesService,
    private invoiceItemsService: InvoiceItemsService,
    private productsService: ProductsService,
  ) { }


  ngOnInit() {
    this.invoiceId = +this.route.snapshot.params['id'];

    this.customTableColumns = [
      { // product.name
        name: 'Product',
        prop: 'product.name',
      },
      { // item.quantity
        name: 'Quantity',
        prop: 'item.quantity',
      },
      { // x
        cellTemplate: this.multipleTmpl,
      },
      { // product.price
        name: 'Price (per item)',
        prop: 'product.price',
        cellTemplate: this.customItemPriceTmpl,
      },
      { // =
        cellTemplate: this.equalityTmpl,
      },
      { // item.total
        name: 'Price (total)',
        cellTemplate: this.customTotalPriceTmpl,
      },
      { // buttons edit/delete
        cellTemplate: this.customActionTmpl,
      },
    ];

    this.loadItems(this.invoiceId);
  }


  public async loadItems(invId: number) {
    this.loadingIndicator = true;

    // update invoice for getting total
    this.invoice = await this.invoicesService
    .getById(this.invoiceId).toPromise();
    // update list of items
    const itemsList: IInvoiceItem[] = await this.invoiceItemsService
    .getAll(this.invoiceId).toPromise();

    const arrInvs: ICustomInvItem[] = [];

    for (let i = 0; i < itemsList.length; i += 1) {
      const itemEl: IInvoiceItem = itemsList[i];

      const productEl: IProduct = await this.productsService
      .getById(itemEl.product_id).toPromise();

      const customInvEl: ICustomInvItem = {
        _id: i + 1,
        item: itemEl,
        product: productEl,
      };

      arrInvs.push(customInvEl);
    }

    // push items data to table
    this.customInvArray$.next(arrInvs);

    this.loadingIndicator = false;
  }


  public onCreate() {

    // open modal window
    const modalRef = this.modalService
    .open(ItemsCreateUpdateComponent, { centered: true });
    const inputData = { action: 'create', item: new InvoiceItem() };
    Object.assign(modalRef.componentInstance, inputData);

    // subscribe to data from modal window
    // get "product_id" and "quantity" from modal
    modalRef.result.then((dataFromModal) => {

      if (!dataFromModal) { return; }
      // set invoice.id

      const newInvoiceItem = {
        invoice_id: this.invoiceId,
        product_id: dataFromModal.product.id,
        quantity: dataFromModal.quantity
      }

      this.invoiceItemsService
      .create(this.invoiceId, newInvoiceItem)
      .subscribe((createdItem: IInvoiceItem) => {

        const arrInvs: ICustomInvItem[] = this.customInvArray$.getValue();

        const customInvEl: ICustomInvItem = {
          // icrease id
          _id: arrInvs.slice(-1)[0]._id + 1 || 1,
          item: createdItem,
          product: dataFromModal.product,
        };

        arrInvs.push(customInvEl);
        this.customInvArray$.next([...arrInvs]);

      });

    });

  }

          // add item to list
        // const arr = this.items.getValue();
        // arr.push(createdItem);
        // this.items.next([...arr]);

        // this.reloadInvoiceItems();


        // update total for invoice
        // this.invoice.total += itemTotal;
        // // this.invoice.total = 0;
        // this.invoicesService
        // .updateById(this.invoice.id, this.invoice)
        // .subscribe(data => console.log('data =>', data));

  public onEdit(item: IInvoiceItem) {

    // open modal window
    const modalRef = this.modalService
    .open(ItemsCreateUpdateComponent, { centered: true });
    const inputData = { action: 'edit', item };
    Object.assign(modalRef.componentInstance, inputData);

    // subscribe to data from modal window
    modalRef.result.then((newData) => {

      if (!newData) { return; }
      newData.invoice_id = this.invoiceId;

      this.invoiceItemsService
      .updateById(this.invoiceId, item.id, newData)
      .subscribe((updatedItem: IInvoiceItem) => {

        // update total for item
        const itemTotal = Number( (newData.quantity * newData.price).toFixed(2) );
        updatedItem.total = itemTotal;

        // set item in list
        // const arr = this.items.getValue();
        // const index = arr.indexOf(item);
        // arr.splice(index, 1, updatedItem);
        // this.items.next([...arr]);



      })

      });
  }

  public async calculateInvoicePrice() {
    // const itemsList: IInvoiceItem[] = this.items.getValue();
    // await itemsList.forEach((item: IInvoiceItem) => {
    //   this.productsService
    //     .getById(item.product_id)
    //     .subscribe((product: IProduct) => {
    //       const itemPrice = item.quantity * product.price;
    //       this.totalPrice += itemPrice;
    //       console.log(`Product #${item.product_id} => ${itemPrice} $`);
    //     });
    // });
    console.log('total => ', this.totalPrice);
    // for (const item of itemsList) {
    //   await this.productsService
    //     .getById(item.product_id)
    //     .subscribe((product: IProduct) => {
    //       const itemPrice = item.quantity * product.price;
    //       this.totalPrice += itemPrice;
    //       console.log(`Product #${item.product_id} => ${itemPrice} $`);
    //       console.log('total #1 => ', this.totalPrice);
    //     })
    //   console.log('total #2 => ', this.totalPrice);
    // }
    // console.log('total #3 => ', this.totalPrice);
  }


  public onDelete(item: IInvoiceItem) {
    const modalRef = this.modalService
      .open(ConfirmDeleteComponent, { centered: true });

    modalRef.componentInstance.name = 'this item';

    modalRef.result
      .then((confirmation) => {
        if (confirmation) {
          this.invoiceItemsService
            .deleteById(this.invoiceId, item.id)
            .subscribe((data) => {
              // const arr = this.items.getValue().filter(el => el.id !== item.id);
              // this.items.next([...arr]);
            });
        }
      });
  }

  printClick(action: string, data: any) {
    console.log(`printClick => ${action}\n`, data);
  }

}
