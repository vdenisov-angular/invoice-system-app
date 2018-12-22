import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesCreateUpdateComponent } from './invoices-create-update.component';

describe('InvoicesCreateUpdateComponent', () => {
  let component: InvoicesCreateUpdateComponent;
  let fixture: ComponentFixture<InvoicesCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
