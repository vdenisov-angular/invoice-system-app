import { ICustomer, Customer } from './../../../core/models/index';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbTypeahead, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { CustomersService } from './../../../core/services';
import { IInvoice } from '../../../core/models';

import { Observable, Subject, merge, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-invoices-create-update',
  templateUrl: './invoices-create-update.component.html',
  styleUrls: ['./invoices-create-update.component.css']
})
export class InvoicesCreateUpdateComponent implements OnInit {

  @Input() action: string;
  @Input() invoice: IInvoice;

  @ViewChild('instance') instance: NgbTypeahead;

  public currentCustomer = new BehaviorSubject<ICustomer>(new Customer());

  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  public editingForm: FormGroup;
  public buttonOk: string;

  public customersNames: Array<string>;
  public customers: Array<ICustomer>;
  public idOfSelectedCustomer: number;

  constructor(
    public activeModal: NgbActiveModal,
    private customerService: CustomersService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buttonOk = (this.action === 'edit') ? 'Update' : 'Add';

    this.editingForm = this.fb.group({

      customer: new FormControl(
        '',
        [
          Validators.required,
        ]
      ),

      discount: new FormControl(
        this.invoice.discount,
        [
          Validators.required,
        ]
      ),

      total: new FormControl(
        this.invoice.total,
        [
          Validators.required,
        ]
      ),

    });

    this.editingForm.controls['discount'].disable();
    this.editingForm.controls['total'].disable();

    this.customerService
      .getAll()
      .subscribe(customersList => {
        // this.customersNames = customersList.map(customer => customer.name)
        this.customers = customersList;
        // console.log(this.customers);
      });
  }

  formatter = (customer) => {
    return customer.name;
  }

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === ''
        ? this.customers

        : this.customers
            .filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)

      ).slice(0, 10)
      )
    );
  }

  onSelectItem(event: NgbTypeaheadSelectItemEvent): void {
    event.preventDefault();
    console.log('EVENT => ', event);
    this.editingForm.patchValue({customer: event.item.name});
    this.currentCustomer.next(event.item);
  }


  public onSave() {
    const selectedCustomer = this.currentCustomer.getValue();

    const userInput = this.editingForm.value;
    const updatedInfo = {
      customer_id: selectedCustomer.id || -1,
      customer_name: selectedCustomer.name,
      discount: userInput.discount || this.invoice.discount,
      total: userInput.total || this.invoice.total,
    };

    console.log('INFO => ', updatedInfo);
    this.activeModal.close(updatedInfo);
    this.editingForm.reset();
  }

}
