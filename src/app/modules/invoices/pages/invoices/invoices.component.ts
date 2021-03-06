import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { IInvoice, Invoice } from 'src/app/shared/types';
import { InvoicesService } from 'src/app/core/services';
import { ConfirmDeleteComponent } from 'src/app/shared/modals';
import { InvoicesCreateUpdateComponent } from './../../components';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {


  @ViewChild('nameTmpl') nameTmpl: TemplateRef<any>;
  @ViewChild('priceTmpl') priceTmpl: TemplateRef<any>;
  @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;


  public buf: Array<any> = [];
  public invoices = new BehaviorSubject<IInvoice[]>([]);
  public tableColumns = [];
  public loadingIndicator = true;


  constructor(
    private invoiceService: InvoicesService,
    private modalService: NgbModal,
    private router: Router
  ) { }


  ngOnInit() {
    this.tableColumns = [
      { name: 'Customer',   prop: 'customer_id', cellTemplate: this.nameTmpl },
      { name: 'Discount %', prop: 'discount' },
      { name: 'Total $',    prop: 'total',       cellTemplate: this.priceTmpl },
      { cellTemplate: this.actionTmpl }
    ];

    this.getData();
  }


  public getData() {
    this.invoiceService
      .getAll()
      .subscribe(invoicesList => {
        this.invoices.next(invoicesList);
        const arr = this.invoices.getValue();
        this.loadingIndicator = false;
      });
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
          console.log('data => ', data);
          this.invoiceService
            .create(data)
            .subscribe((createdInvoice: IInvoice) => {
              const arr = this.invoices.getValue();

              createdInvoice.customer_name = data.customer_name;

              arr.push(createdInvoice);
              this.invoices.next([...arr]);
              console.log(this.invoices.getValue());

              // TODO: redirect to invoice page
              this.router.navigate([`invoices/${createdInvoice.id}`])
            });
        }
      });
  }

  public onDelete(invoice: IInvoice) {
    const modalRef = this.modalService
      .open(ConfirmDeleteComponent, { centered: true });

    // TODO: где взять имя пользователя ?
    // modalRef.componentInstance.name = invoice.customer_name;
    modalRef.componentInstance.name = 'this invoice';

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

  public showItemsForInvoice(invoice: IInvoice) {
    console.log('show invoice => ', invoice);
    const specUrl = `/invoices/${invoice.id}`;
    this.router.navigateByUrl(specUrl);
  }

}
