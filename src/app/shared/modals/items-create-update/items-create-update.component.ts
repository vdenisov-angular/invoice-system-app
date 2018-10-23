import { IInvoiceItem } from './../../../core/models/index';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-items-create-update',
  templateUrl: './items-create-update.component.html',
  styleUrls: ['./items-create-update.component.css']
})
export class ItemsCreateUpdateComponent implements OnInit {

  @Input() action: string;
  @Input() item: IInvoiceItem;

  public buttonOk: string;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.buttonOk = (this.action === 'edit') ? 'Update' : 'Add';
  }

  public onSave() {
    console.log('save');
    this.activeModal.close('qwerty123');
  }

}
