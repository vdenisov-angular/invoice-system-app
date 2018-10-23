import { InvoiceItem } from './../core/models/index';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvoiceItemsService } from './../core/services/invoice-items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { InvoicesService } from './../core/services';
import { IInvoice, IInvoiceItem } from '../core/models';

import {
  ConfirmDeleteComponent,
  ItemsCreateUpdateComponent
} from '../shared/modals';


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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private invoicesService: InvoicesService,
    private invoiceItemsService: InvoiceItemsService
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
        console.log('items => ', arr);
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
              console.log(this.items.getValue());

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
            })
        }
      });
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
