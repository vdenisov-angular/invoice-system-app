import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IProduct } from '../../../core/models';


@Component({
  selector: 'app-products-create-update',
  templateUrl: './products-create-update.component.html',
  styleUrls: ['./products-create-update.component.css']
})
export class ProductsCreateUpdateComponent implements OnInit {

  @Input() action: string;
  @Input() product: IProduct;

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
        this.product.name,
        [
          Validators.required,
        ]
      ),

      price: new FormControl(
        this.product.price,
        [
          Validators.required,
        ]
      ),

    });
  }

    //////////////////////////////////////////////////////////////////////////////////////////////
  // VALIDATION

  get name() { return this.editingForm.get('name') }
  get nameInvalid() { return  this.name.invalid && ( this.name.dirty ||  this.name.touched) }
  get errorNameRequired() { return this.name.hasError('required') && this.name.touched }

  get price() { return this.editingForm.get('price') }
  get priceInvalid() { return  this.price.invalid && ( this.price.dirty ||  this.price.touched) }
  get errorPriceRequired() { return this.price.hasError('required') && this.price.touched }

  //////////////////////////////////////////////////////////////////////////////////////////////

  public onSave() {
    const userInput = this.editingForm.value;
    const updatedInfo = {
      name: userInput.name || this.product.name,
      price: userInput.price || this.product.price,
    };
    this.activeModal.close(updatedInfo);
    this.editingForm.reset();
  }

}
