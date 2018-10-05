import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../core/services';
import { Observable } from 'rxjs';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {

  public id: number;
  public customer$: Observable<object>;
  public customer: object;
  public isData = false;
  public isEdit = false;
  public editingForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomersService,
    private fb: FormBuilder,
  ) {
    this.editingForm = this.fb.group({
      'name': ['', Validators.required],
      'address': ['', Validators.required],
      'phone': ['', Validators.required],
    });
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    // this.customer$ = this.customerService.getById(this.id);
    this.customer = this.customerService
      .getById(this.id)
      .subscribe(data => {
        this.customer = data;
        this.isData = true;
      });
  }

  public goBack() {
    this.router.navigateByUrl('/customers');
  }

  public onEdit() {
    this.toggleMode();
  }

  public onSave() {
    const userInput = this.editingForm.value;
    const updatedInfo = {
      name: userInput['name'] || this.customer['name'],
      address: userInput['address'] || this.customer['address'],
      phone: userInput['phone'] || this.customer['phone'],
    };
    this.customerService
      .updateById(this.id, updatedInfo)
      .subscribe((data) => this.customer = data);
    this.editingForm.reset();
    this.toggleMode();
  }

  public toggleMode() {
    this.isEdit = !this.isEdit;
  }

}
