import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../core/services';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ICustomer } from '../core/models';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers = new BehaviorSubject<ICustomer[]>([]);
  public customersSub$ = this.customerService.getAll();
  public addingForm: FormGroup;

  public formIsOpened = false;
  public isEdit = false;

  public tableColumns = [
    { prop: 'name' },
    { prop: 'phone' },
    { prop: 'address' }
  ];

  constructor(
    private customerService: CustomersService,
    private fb: FormBuilder
  ) {
    this.addingForm = this.fb.group({
      'name': ['', Validators.required],
      'address': ['', Validators.required],
      'phone': ['', Validators.required],
    });
  }

  ngOnInit() {
    this.customerService
      .getAll()
      .subscribe(data => {
        this.customers.next(data);
        // this.customers = data;
        // console.log('customers => ', this.customers);
      });
  }

  public onCreate() {
    const userInput = this.addingForm.value;
    this.customerService
      .create(userInput)
      .subscribe(newCustomer => {
        console.log();
        const customers = this.customers.getValue().concat(newCustomer);
        console.log('customers => ', customers);
        this.customers.next(customers);
        // this.customers.push(newCustomer);
        // console.log('customers => ', this.customers);
      });
    this.addingForm.reset();
    this.closeForm();
  }

  public onDelete(obj) {
    this.customerService
      .deleteById(obj.id)
      .subscribe((data) => {
        // const index = this.customers.indexOf(obj);
        // this.customers.splice(index, 1);
      });
  }

  public openForm() {
    this.formIsOpened = true;
  }

  public closeForm() {
    this.formIsOpened = false;
  }

}
