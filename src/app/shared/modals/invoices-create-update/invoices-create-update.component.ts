import { ICustomer } from './../../../core/models/index';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbTypeahead, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { CustomersService } from './../../../core/services';
import { IInvoice } from '../../../core/models';

import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';


const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


@Component({
  selector: 'app-invoices-create-update',
  templateUrl: './invoices-create-update.component.html',
  styleUrls: ['./invoices-create-update.component.css']
})
export class InvoicesCreateUpdateComponent implements OnInit {

  @Input() action: string;
  @Input() invoice: IInvoice;

  @ViewChild('instance') instance: NgbTypeahead;


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
    this.buttonOk = (this.action === 'edit') ? 'Update' : 'Create';

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

    this.customerService
      .getAll()
      .subscribe(customersList => {
        // this.customersNames = customersList.map(customer => customer.name)
        this.customers = customersList;
        console.log(this.customers);
      });
  }

  formatter = (customer) => {
    console.log('customer => ', customer)
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
  }


/*   public search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map( (term) =>
        this.customers
            .filter( (v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
            .slice(0, 10)
      )
  ) */

  public onSave() {
    console.log('\n\n\n FORM VALUE => ', this.editingForm.value);

/*     const userInput = this.editingForm.value;
    const updatedInfo = {
      customer_id: userInput.customer_id || this.invoice.customer_id,
      discount: userInput.discount || this.invoice.discount,
      total: userInput.total || this.invoice.total,
    };
    this.activeModal.close(updatedInfo);
    this.editingForm.reset(); */
  }

}
