import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject } from 'rxjs';

import { ProductsService } from 'src/app/core/services';
import { IProduct, Product } from './../../shared/types';

import { ConfirmDeleteComponent } from 'src/app/shared/modals';
import { ProductsCreateUpdateComponent } from './../../components';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;

  public products = new BehaviorSubject<IProduct[]>([]);
  public tableColumns = [];
  public loadingIndicator = true;

  constructor(
    private productService: ProductsService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.productService
      .getAll()
      .subscribe(data => {
        this.loadingIndicator = false;
        this.products.next(data);
      });
    this.tableColumns = [
      { name: 'Name', prop: 'name',  },
      { name: 'Price $', prop: 'price' },
      { cellTemplate: this.actionTmpl }
    ];
  }

  public onCreate() {
    const modalRef = this.modalService
      .open(ProductsCreateUpdateComponent, { centered: true });

    const inputData = {
      action: 'create',
      product: new Product()
    };

    Object.assign(modalRef.componentInstance, inputData);

    modalRef.result
      .then((data) => {
        if (data) {
          this.productService
            .create(data)
            .subscribe((createdProduct) => {
              const arr = this.products.getValue();
              arr.push(createdProduct);
              this.products.next([...arr])
            });
        }
      });
  }

  public onEdit(product: IProduct) {
    const modalRef = this.modalService
      .open(ProductsCreateUpdateComponent, { centered: true });

    const inputData = {
      action: 'edit',
      product: product
    };

    Object.assign(modalRef.componentInstance, inputData);

    modalRef.result
      .then((data) => {
        if (data) {
          this.productService
            .updateById(product.id, data)
            .subscribe((updatedProduct) => {
              const arr = this.products.getValue();
              const index = arr.indexOf(product);
              arr.splice(index, 1, updatedProduct);
              this.products.next([...arr]);
            });
        }
      });

  }

  public onDelete(product: IProduct) {
    const modalRef = this.modalService
      .open(ConfirmDeleteComponent, { centered: true });

    modalRef.componentInstance.name = product.name;

    modalRef.result
      .then((confirmation) => {
        if (confirmation) {
          this.productService
            .deleteById(product.id)
            .subscribe((data) => {
              const arr = this.products.getValue().filter(el => el.id !== product.id);
              this.products.next([...arr]);
            });
        }
      });
  }

}
