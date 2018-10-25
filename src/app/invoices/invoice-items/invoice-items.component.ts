import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BehaviorSubject } from 'rxjs';

import { InvoicesService, InvoiceItemsService, ProductsService } from './../../core/services';
import { IInvoiceItem, InvoiceItem, IProduct } from './../../core/models';

import { ConfirmDeleteComponent, ItemsCreateUpdateComponent } from './../../shared/modals';


@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.css']
})
export class InvoiceItemsComponent implements OnInit {

  @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;
  @ViewChild('nameTmpl') nameTmpl: TemplateRef<any>;

  public invoiceId: number;

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
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.invoiceId = +this.route.snapshot.params['id'];
    // this.invoicesService
    //   .getById(this.id)
    //   .subscribe(data => {
    //     this.invoice = data;
    //   })
    this.invoiceItemsService
      .getAll(this.invoiceId)
      .subscribe(itemsList => {
        this.items.next(itemsList);
        const arr = this.items.getValue();
        this.loadingIndicator = false;
      });

    this.tableColumns = [
      { name: 'Product', prop: 'product_id', cellTemplate: this.nameTmpl },
      { name: 'Quantity (pieces)', prop: 'quantity' },
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
      .then((data) => {
        if (data) {
          data.invoice_id = this.invoiceId;
          this.invoiceItemsService
            .create(this.invoiceId, data)
            .subscribe((createdItem: IInvoiceItem) => {
              const arr = this.items.getValue();
              arr.push(createdItem);
              this.items.next([...arr]);
            })
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
      .then((data) => {
        if (data) {
          data.invoice_id = this.invoiceId;
          this.invoiceItemsService
            .updateById(this.invoiceId, item.id, data)
            .subscribe((updatedItem: IInvoiceItem) => {
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

  public goBack() {
    this.router.navigateByUrl('/invoices');
  }

}
