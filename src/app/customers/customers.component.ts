import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';

import { CustomersService } from '../core/services';
import { ICustomer, Customer } from '../core/models';

import { ConfirmDeleteComponent } from './../shared/confirm-delete/confirm-delete.component';
import { EditWindowComponent } from '../shared/edit-window/edit-window.component';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;

  public customers: BehaviorSubject<ICustomer[]>  = new BehaviorSubject<ICustomer[]>([]);

  public formIsOpened = false;
  public isEdit = false;

  public tableColumns = [];

  constructor(
    private customerService: CustomersService,
    private modalService: NgbModal
  ) {}

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
    const modalRef = this.modalService
      .open(EditWindowComponent, { centered: true });

    const inputData = {
      action: 'create',
      customer: new Customer({name: '', phone: '', address: ''}),
    };

    Object.assign(modalRef.componentInstance, inputData);

    modalRef.result
      .then((data) => {
        if (data) {
          this.customerService
            .create(data)
            .subscribe((createdCustomer) => {
              // const arr = this.customers.getValue().concat(createdCustomer);
              // this.customers.next(arr);
              const arr = this.customers.getValue();
              arr.push(createdCustomer);
              this.customers.next([...arr])
            });
        }
      });
  }

  public onEdit(customer: ICustomer) {
    const modalRef = this.modalService
      .open(EditWindowComponent, { centered: true });

    const inputData = {
      action: 'edit',
      customer: customer
    };

    Object.assign(modalRef.componentInstance, inputData);

    modalRef.result
      .then((data) => {
        if (data) {
          this.customerService
            .updateById(customer.id, data)
            .subscribe((updatedCustomer) => {
              const arr = this.customers.getValue();
              // const index = arr.findIndex(el => el.id === customer.id);
              const index = arr.indexOf(customer);
              arr.splice(index, 1, updatedCustomer);
              this.customers.next([...arr]);
            });
        }
      });
  }

  public onDelete(customer: ICustomer) {
    const modalRef = this.modalService
      .open(ConfirmDeleteComponent, { centered: true });

    modalRef.componentInstance.name = customer.name;

    modalRef.result
      .then((confirmation) => {
        if (confirmation) {
          this.customerService
            .deleteById(customer.id)
            .subscribe((data) => {
              // const arr = this.customers.getValue().filter(el => el.id !== customer.id);
              // this.customers.next(arr);
              const arr = this.customers.getValue();
              const index = arr.indexOf(customer);
              arr.splice(index, 1);
              this.customers.next([...arr]);
            });
        }
      });
  }

}
