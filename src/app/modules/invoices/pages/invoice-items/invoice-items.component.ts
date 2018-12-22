import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { IInvoice, IInvoiceItem, InvoiceItem, IProduct } from 'src/app/shared/types';
import { InvoicesService, InvoiceItemsService, ProductsService } from 'src/app/core/services';
import { ConfirmDeleteComponent } from 'src/app/shared/modals';
import { ItemsCreateUpdateComponent } from './../../components';


@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.css']
})
export class InvoiceItemsComponent implements OnInit {

  @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;
  @ViewChild('nameTmpl') nameTmpl: TemplateRef<any>;

  public invoiceId: number;
  public invoice: IInvoice;

  public items = new BehaviorSubject<IInvoiceItem[]>([]);
  public tableColumns = [];

  public loadingIndicator = true;

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
    this.invoicesService
      .getById(this.invoiceId)
      .subscribe(data => {
        this.invoice = data;
        console.log('customer_id => ', this.invoice.customer_id)
      });
    this.invoiceItemsService
      .getAll(this.invoiceId)
      .subscribe((itemsList) => {
        itemsList.map((item: IInvoiceItem) => {
          item.total = 'loading...';
          this.productsService
            .getById(item.product_id)
            .subscribe((product: IProduct) => {
              item.total = Number( (item.quantity * product.price).toFixed(2) );
            });
        });
        console.log('items list => ', itemsList)
        this.items.next(itemsList);
        this.loadingIndicator = false;
      });

    this.tableColumns = [
      { name: 'Product', prop: 'product_id', cellTemplate: this.nameTmpl },
      { name: 'Quantity (pieces)', prop: 'quantity' },
      { name: 'Price (total)', prop: 'total' },
      { cellTemplate: this.actionTmpl }
    ];
  }

  public onCreate() {
    const modalRef = this.modalService
      .open(ItemsCreateUpdateComponent, { centered: true });

    const inputData = {
      action: 'create',
      item: new InvoiceItem()
    };

    Object.assign(modalRef.componentInstance, inputData);

    modalRef.result
      .then(newData => {
        if (newData) {
          newData.invoice_id = this.invoiceId;
          this.invoiceItemsService
            .create(this.invoiceId, newData)
            .subscribe((createdItem: IInvoiceItem) => {
              createdItem.total = Number( (newData.quantity * newData.price).toFixed(2) );
              const arr = this.items.getValue();
              arr.push(createdItem);
              this.items.next([...arr]);
            });
        }
      });
  }

  public onEdit(item: IInvoiceItem) {
    const modalRef = this.modalService
      .open(ItemsCreateUpdateComponent, { centered: true });

    const inputData = {
      action: 'edit',
      item
    };

    Object.assign(modalRef.componentInstance, inputData);

    modalRef.result
      .then((newData) => {
        if (newData) {
          newData.invoice_id = this.invoiceId;
          this.invoiceItemsService
            .updateById(this.invoiceId, item.id, newData)
            .subscribe((updatedItem: IInvoiceItem) => {
              updatedItem.total = Number( (newData.quantity * newData.price).toFixed(2) );
              const arr = this.items.getValue();
              const index = arr.indexOf(item);
              arr.splice(index, 1, updatedItem);
              this.items.next([...arr]);

              this.calculateInvoicePrice();
            })
        }
      });
  }

  public async calculateInvoicePrice() {
    const itemsList: IInvoiceItem[] = this.items.getValue();
    await itemsList.forEach((item: IInvoiceItem) => {
      this.productsService
        .getById(item.product_id)
        .subscribe((product: IProduct) => {
          const itemPrice = item.quantity * product.price;
          this.totalPrice += itemPrice;
          console.log(`Product #${item.product_id} => ${itemPrice} $`);
        });
    });
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
              const arr = this.items.getValue().filter(el => el.id !== item.id);
              this.items.next([...arr]);
            });
        }
      });
  }

}
