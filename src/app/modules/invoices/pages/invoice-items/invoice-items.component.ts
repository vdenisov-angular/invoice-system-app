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
  public loadingIndicator;
  public customTableColumns = [];
  public customInvArray$ = new BehaviorSubject<ICustomInvItem[]>([]);


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


  public async onCreate() {
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
        quantity: dataFromModal.quantity,
      };

      this.invoiceItemsService
      .create(this.invoiceId, newInvoiceItem)
      .subscribe((createdItem: IInvoiceItem) => {

        // udpate table {
        const arrInvs: ICustomInvItem[] = this.customInvArray$.getValue();
        const lastElement = arrInvs.slice(-1)[0];
        const customInvEl: ICustomInvItem = {
          // icrease id
          _id: lastElement ? (lastElement._id + 1) : 1,
          item: createdItem,
          product: dataFromModal.product,
        };
        arrInvs.push(customInvEl);
        this.customInvArray$.next([...arrInvs]);
        // } update table

        // update main total {
        const additionForTotal = customInvEl.item.quantity * customInvEl.product.price;
        this.invoice.total += additionForTotal;
        this.invoicesService
        .updateById(this.invoiceId, this.invoice)
        .subscribe((data) => console.log('CREATE => data', data));
        // } update main total

      });
    });
  }


  public onEdit(selectedInvItem: ICustomInvItem) {
    // open modal window
    const modalRef = this.modalService
    .open(ItemsCreateUpdateComponent, { centered: true });
    const inputData = { action: 'edit', item: selectedInvItem.item };
    Object.assign(modalRef.componentInstance, inputData);

    // subscribe to data from modal window
    // get "product_id" and "quantity" from modal
    modalRef.result.then((dataFromModal) => {
      if (!dataFromModal) { return; }

      // set invoice.id
      const newInvoiceItem = {
        invoice_id: this.invoiceId,
        product_id: dataFromModal.product.id,
        quantity: dataFromModal.quantity,
      };

      this.invoiceItemsService
      .updateById(this.invoiceId, selectedInvItem.item.id, newInvoiceItem)
      .subscribe((updatedItem: IInvoiceItem) => {

        // udpate table {
        const arrInvs: ICustomInvItem[] = this.customInvArray$.getValue();
        const customInvEl: ICustomInvItem = {
          _id: selectedInvItem._id,
          item: updatedItem,
          product: dataFromModal.product,
        };
        const index = arrInvs.indexOf(selectedInvItem);
        arrInvs.splice(index, 1, customInvEl);
        this.customInvArray$.next([...arrInvs]);
        // } udpate table

        // update main total {
        const changesForQuantity = updatedItem.quantity - selectedInvItem.item.quantity;
        const changesForTotal = changesForQuantity * selectedInvItem.product.price;
        this.invoice.total += changesForTotal;
        this.invoicesService
        .updateById(this.invoiceId, this.invoice)
        .subscribe((data) => console.log('EDIT => data', data));
        // } update main total


      });
    });
  }


  public onDelete(selectedInvItem: ICustomInvItem) {
    const modalRef = this.modalService
      .open(ConfirmDeleteComponent, { centered: true });
    modalRef.componentInstance.name = 'this item';

    modalRef.result.then((confirmation) => {
      if (!confirmation) { return; }

      this.invoiceItemsService
      .deleteById(this.invoiceId, selectedInvItem.item.id)
      .subscribe((data) => {

        // udpate table {
        let arrInvs: ICustomInvItem[] = this.customInvArray$.getValue();
        arrInvs = arrInvs.filter((invEl: ICustomInvItem) => invEl._id !== selectedInvItem._id);
        this.customInvArray$.next(arrInvs);
        // } udpate table

        // update main total {
        const subtractionForTotal = selectedInvItem.item.quantity * selectedInvItem.product.price;
        this.invoice.total -= subtractionForTotal;
        this.invoicesService
        .updateById(this.invoiceId, this.invoice)
        .subscribe((data) => console.log('DELETE => info', data));
        // } update main total

      });
    });
  }


}
