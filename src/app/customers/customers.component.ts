import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';

import { CustomersService } from '../core/services';
import { ICustomer } from '../core/models';

import { ConfirmDeleteComponent } from './../shared/confirm-delete/confirm-delete.component';
import { EditWindowComponent } from '../shared/edit-window/edit-window.component';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;

  public customers = new BehaviorSubject<ICustomer[]>([]);
  public customersSub$ = this.customerService.getAll();
  public addingForm: FormGroup;

  public formIsOpened = false;
  public isEdit = false;

  public tableColumns = [];

  constructor(
    private customerService: CustomersService,
    private fb: FormBuilder,
    private modalService: NgbModal
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
      });
    this.tableColumns = [
      { name: 'Name', prop: 'name',  },
      { name: 'Phone', prop: 'phone' },
      { name: 'Address', prop: 'address' },
      { cellTemplate: this.actionTmpl }
    ];
  }

  public onCreate() {
    const userInput = this.addingForm.value;
    this.customerService
      .create(userInput)
      .subscribe(newCustomer => {
        const arr = this.customers.getValue().concat(newCustomer);
        this.customers.next(arr);
      });
    this.addingForm.reset();
    this.closeForm();
  }

  public onDelete(obj) {
    const modalRef = this.modalService
      .open(ConfirmDeleteComponent, { centered: true });

    modalRef.componentInstance.name = obj.name;

    modalRef.result
      .then((result) => {
        // is it necessary to remove ?
        if (result) {
          this.customerService
            .deleteById(obj.id)
            .subscribe((data) => {
              const arr = this.customers.getValue().filter(el => el.id !== obj.id);
              this.customers.next(arr);
            });
        }
      });
  }

  public onEdit(customer: ICustomer) {
    const modalRef = this.modalService
      .open(EditWindowComponent, { centered: true });

    modalRef.componentInstance.customer = customer;

    modalRef.result
      .then((result) => {
        // is it necessary to edit ?
        if (result) {
          this.customerService
            .updateById(customer.id, result)
            .subscribe((newCustomer) => {
              const arr = this.customers.getValue();
              let oldCustomer = arr.find(el => el.id === customer.id);
              oldCustomer = Object.assign({}, oldCustomer, newCustomer);
              this.customers.next(arr);
              // console.log('data => ', data);
              // const arr = this.customers.getValue();
              // const index = arr.indexOf(obj);
              // console.log('arr[index] => ', arr[index]);
              // arr[index] = data;
              // console.log('arr[index] => ', arr[index]);
              // console.log('arr => ', arr);

              // console.log('customers BEFORE => ', this.customers.getValue());
              // // this.customers.next(arr);
              // console.log('customers AFTER => ', this.customers.getValue());
            });
        }
      });
  }

  public openForm() {
    this.formIsOpened = true;
  }

  public closeForm() {
    this.formIsOpened = false;
  }

}
