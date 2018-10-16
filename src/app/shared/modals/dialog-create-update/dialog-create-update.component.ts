import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ICustomer } from '../../../core/models';


@Component({
  selector: 'app-dialog-create-update',
  templateUrl: './dialog-create-update.component.html',
  styleUrls: ['./dialog-create-update.component.css']
})
export class DialogCreateUpdateComponent implements OnInit {

  @Input() type: string;
  @Input() action: string;
  @Input() itemData: any;

  public itemKeys;

  public editingForm: FormGroup;
  public buttonOk: string;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buttonOk = (this.action === 'edit') ? 'Update' : 'Create';
    this.itemKeys = Object.keys(this.itemData);

    const formControls = {};

    for (let key of this.itemKeys) {
      formControls[key] = new FormControl(
        this.itemData[key],
        [ Validators.required ]
      );
    }

    this.editingForm = this.fb.group(
      this.deleteExtraFieldsFrom(formControls)
    );
  }

  public onSave() {
    const userInput = this.editingForm.value;
    const updatedInfo = {};

    for (let key of this.itemKeys) {
      updatedInfo[key] = userInput[key] || this.itemData[key];
    }

    this.activeModal.close(updatedInfo);
    this.editingForm.reset();
  }

  public deleteExtraFieldsFrom(obj: Object) {
    delete obj['id'];
    delete obj['createdAt'];
    delete obj['updatedAt'];
    return obj;
  }

}
