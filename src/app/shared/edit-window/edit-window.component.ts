import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ICustomer } from '../../core/models';



@Component({
  selector: 'app-edit-window',
  templateUrl: './edit-window.component.html',
  styleUrls: ['./edit-window.component.css']
})
export class EditWindowComponent implements OnInit {

  @Input() customer: ICustomer;

  public editingForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.editingForm = this.fb.group({
      'name': [this.customer.name, Validators.required],
      'phone': [this.customer.phone, Validators.required],
      'address': [this.customer.address, Validators.required],
    });
  }

  public onSave() {
    const userInput = this.editingForm.value;
    const updatedInfo = {
      name: userInput['name'] || this.customer['name'],
      phone: userInput['phone'] || this.customer['phone'],
      address: userInput['address'] || this.customer['address'],
    };
    this.activeModal.close(updatedInfo);
    this.editingForm.reset();
  }

}
