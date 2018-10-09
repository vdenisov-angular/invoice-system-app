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

  @Input() action: string;
  @Input() customer: ICustomer;

  public editingForm: FormGroup;
  public buttonOk: string;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.editingForm = this.fb.group({

      name: new FormControl(
        this.customer.name,
        [
          Validators.required,
          Validators.maxLength(10),
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
          Validators.maxLength(30),
        ]
      ),

    });
    this.buttonOk = (this.action === 'edit') ? 'Save' : 'Create';
  }

  public onSave() {
    const userInput = this.editingForm.value;
    const updatedInfo = {
      name: userInput.name || this.customer.name,
      phone: userInput.phone || this.customer.phone,
      address: userInput.address || this.customer.address,
    };
    this.activeModal.close(updatedInfo);
    this.editingForm.reset();
  }

}
