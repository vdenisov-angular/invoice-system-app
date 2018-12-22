import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// import { IInvoiceItem } from 'src/app/shared/types';


@Component({
  selector: 'app-select-invoice-items',
  templateUrl: './select-invoice-items.component.html',
  styleUrls: ['./select-invoice-items.component.css']
})
export class SelectInvoiceItemsComponent implements OnInit {

  public itemsForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.itemsForm = this.fb.group({

      name: new FormControl(
        '',
        [
          Validators.required,
        ]
      ),

    });
  }

  public addItem() {
    this.itemsForm.addControl('i', new FormControl());
    console.log(this.itemsForm.controls);
  }

  public onSave() {
    console.log('save');
  }

}
