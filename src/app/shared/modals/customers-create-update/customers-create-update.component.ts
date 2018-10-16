import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ICustomer } from '../../../core/models';


@Component({
  selector: 'app-customers-create-update',
  templateUrl: './customers-create-update.component.html',
  styleUrls: ['./customers-create-update.component.css']
})
export class CustomersCreateUpdateComponent implements OnInit {

  @Input() action: string;
  @Input() customer: ICustomer;

  public editingForm: FormGroup;
  public buttonOk: string;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buttonOk = (this.action === 'edit') ? 'Update' : 'Create';

    this.editingForm = this.fb.group({

      name: new FormControl(
        this.customer.name,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30),
        ]
      ),

      phone: new FormControl(
        this.customer.phone,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(11),
        ]
      ),

      address: new FormControl(
        this.customer.address,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(30),
        ]
      ),

    });
  }

  //////////////////////////////////////////////////////////////////////////////////////////////
  // VALIDATION

  get name() { return this.editingForm.get('name') }
  get nameInvalid() { return  this.name.invalid && ( this.name.dirty ||  this.name.touched) }
  get errorNameRequired() { return this.name.hasError('required') && this.name.touched }
  get errorNameMinlen() { return this.name.hasError('minlength') && this.name.touched }
  get errorNameMaxlen() { return this.name.hasError('maxlength') && this.name.touched }

  get phone() { return this.editingForm.get('phone') }
  get phoneInvalid() { return  this.phone.invalid && ( this.phone.dirty ||  this.phone.touched) }
  get errorPhoneRequired() { return this.phone.hasError('required') && this.phone.touched }
  get errorPhoneMinlen() { return this.phone.hasError('minlength') && this.phone.touched }
  get errorPhoneMaxlen() { return this.phone.hasError('maxlength') && this.phone.touched }

  get address() { return this.editingForm.get('address') }
  get addressInvalid() { return  this.address.invalid && ( this.address.dirty ||  this.address.touched) }
  get errorAddressRequired() { return this.address.hasError('required') && this.address.touched }
  get errorAddressMinlen() { return this.address.hasError('minlength') && this.address.touched }
  get errorAddressMaxlen() { return this.address.hasError('maxlength') && this.address.touched }

  //////////////////////////////////////////////////////////////////////////////////////////////

  public onSave() {
    const userInput = this.editingForm.value;
    console.log(userInput)
    const updatedInfo = {
      name: userInput.name || this.customer.name,
      phone: userInput.phone || this.customer.phone,
      address: userInput.address || this.customer.address,
    };
    this.activeModal.close(updatedInfo);
    this.editingForm.reset();
  }

}
