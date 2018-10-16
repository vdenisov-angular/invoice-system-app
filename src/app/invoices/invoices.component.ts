import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';

import { InvoicesService, CustomersService } from '../core/services';
import { IInvoice, Invoice } from '../core/models';

import {
  ConfirmDeleteComponent,
  InvoicesCreateUpdateComponent,
} from '../shared/modals';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;

  public invoices = new BehaviorSubject<IInvoice[]>([]);
  public tableColumns = [];
  public loadingIndicator = true;

  constructor(
    private invoiceService: InvoicesService,
    private customerService: CustomersService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.invoiceService
      .getAll()
      .subscribe(invoicesList => {
        invoicesList.forEach(invoice => {
          invoice.customer_name = 'loading...';
        });

        this.invoices.next(invoicesList);

        invoicesList.forEach(invoice => {
          this.customerService
            .getById(invoice.customer_id)
            .subscribe(customer => {
              invoice.customer_name = customer.name
            });
        });

        this.loadingIndicator = false;
        this.invoices.next(invoicesList);

      });

    this.tableColumns = [
      { name: 'Customer', prop: 'customer_name',  },
      { name: 'Discount %', prop: 'discount' },
      { name: 'Total $', prop: 'total' },
      { cellTemplate: this.actionTmpl }
    ];
  }

  public onCreate() {
    const modalRef = this.modalService
      .open(InvoicesCreateUpdateComponent, { centered: true });

    const inputData = {
      action: 'create',
      invoice: new Invoice()
    };

    Object.assign(modalRef.componentInstance, inputData);

    modalRef.result
      .then((data) => {
        if (data) {
          this.invoiceService
            .create(data)
            .subscribe((createdInvoice) => {
              const arr = this.invoices.getValue();
              arr.push(createdInvoice);
              this.invoices.next([...arr])
            });
        }
      });

  }

  public onDelete(invoice: IInvoice) {
    const modalRef = this.modalService
      .open(ConfirmDeleteComponent, { centered: true });

    modalRef.componentInstance.name = invoice.customer_name;

    modalRef.result
      .then((confirmation) => {
        if (confirmation) {
          this.invoiceService
            .deleteById(invoice.id)
            .subscribe((data) => {
              const arr = this.invoices.getValue().filter(el => el.id !== invoice.id);
              this.invoices.next([...arr]);
            });
        }
      });
  }


}
