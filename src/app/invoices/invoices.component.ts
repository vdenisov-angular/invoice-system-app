import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';

import { InvoicesService } from '../core/services';
import { IInvoice } from '../core/models';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  public invoices = new BehaviorSubject<IInvoice[]>([]);
  public tableColumns = [];

  constructor(
    private invoiceService: InvoicesService,
  ) { }

  ngOnInit() {
    this.invoiceService
      .getAll()
      .subscribe(data => {
        console.log('invoces => ', data);
      })
  }

}
