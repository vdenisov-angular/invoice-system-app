import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { CustomersService } from './../../../core/services';
import { IInvoice } from '../../../core/models';


@Component({
  selector: 'app-select-invoice-items',
  templateUrl: './select-invoice-items.component.html',
  styleUrls: ['./select-invoice-items.component.css']
})
export class SelectInvoiceItemsComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private customerService: CustomersService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    console.log('modal window');
  }

}
