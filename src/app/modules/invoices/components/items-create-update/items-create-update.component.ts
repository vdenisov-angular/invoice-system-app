import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbTypeahead, NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subject, merge, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, filter } from 'rxjs/operators';

import { IInvoiceItem, IProduct, Product } from 'src/app/shared/types';
import { ProductsService } from 'src/app/core/services';


@Component({
  selector: 'app-items-create-update',
  templateUrl: './items-create-update.component.html',
  styleUrls: ['./items-create-update.component.css']
})
export class ItemsCreateUpdateComponent implements OnInit {

  @Input() action: string;
  @Input() item: IInvoiceItem;

  @ViewChild('instance') instance: NgbTypeahead;

  public currentProduct = new BehaviorSubject<IProduct>(new Product());

  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  public editingForm: FormGroup;
  public buttonOk: string;

  public productsList: Array<IProduct>;

  constructor(
    public activeModal: NgbActiveModal,
    public productsService: ProductsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.editingForm = this.fb.group({

      product: new FormControl(
        '',
        [
          Validators.required,
        ]
      ),

      quantity: new FormControl(
        this.item.quantity,
        [
          Validators.required,
        ]
      )

    });

    if (this.action === 'edit') {
      this.productsService
        .getById(this.item.product_id)
        .subscribe(productObj => {
          this.editingForm.patchValue({product: productObj.name});
          this.editingForm.controls['product'].disable();
          this.currentProduct.next(productObj);
        });
      this.buttonOk = 'Update';
    } else {
        this.buttonOk = 'Create';
    }

    this.productsService
      .getAll()
      .subscribe(allProducts => {
        this.productsList = allProducts;
      });
  }

  formatter = (product: IProduct) => {
    return product.name;
  }

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === ''
        ? this.productsList

        : this.productsList
            .filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)

      ).slice(0, 10)
      )
    );
  }

  onSelectItem(event: NgbTypeaheadSelectItemEvent): void {
    event.preventDefault();
    console.log('EVENT => ', event);
    this.editingForm.patchValue({product: event.item.name});
    this.currentProduct.next(event.item);
  }

  public onSave() {
    const userInput = this.editingForm.value;
    const selectedProduct = this.currentProduct.getValue();

    const updatedInfo = {
      // product_id: selectedProduct.id || -1,
      product: selectedProduct,
      quantity: parseInt(userInput.quantity, 10) || this.item.quantity,
      // price: selectedProduct.price
    };

    this.activeModal.close(updatedInfo);
    this.editingForm.reset();
  }

}
