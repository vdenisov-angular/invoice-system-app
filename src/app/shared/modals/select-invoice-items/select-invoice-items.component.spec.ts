import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInvoiceItemsComponent } from './select-invoice-items.component';

describe('SelectInvoiceItemsComponent', () => {
  let component: SelectInvoiceItemsComponent;
  let fixture: ComponentFixture<SelectInvoiceItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectInvoiceItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInvoiceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
