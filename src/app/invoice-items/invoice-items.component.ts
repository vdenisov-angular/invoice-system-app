import { InvoiceItemsService } from './../core/services/invoice-items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { InvoicesService } from './../core/services';
import { IInvoice, IInvoiceItem } from '../core/models';


@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.css']
})
export class InvoiceItemsComponent implements OnInit {

  @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;
  @ViewChild('nameTmpl') nameTmpl: TemplateRef<any>;

  public id: number;
  public invoice: IInvoice;

  public items = new BehaviorSubject<IInvoice[]>([]);
  public tableColumns = [];

  public loadingIndicator = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private invoicesService: InvoicesService,
    private invoiceItemsService: InvoiceItemsService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    // this.invoicesService
    //   .getById(this.id)
    //   .subscribe(data => {
    //     this.invoice = data;
    //   })
    this.invoiceItemsService
      .getAll(this.id)
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
    console.log('create');
  }

  public onEdit(row) {
    console.log('edit', row);
  }

  public onDelete(row) {
    console.log('delete', row);
  }

  public goBack() {
    this.router.navigateByUrl('/invoices');
  }

}
