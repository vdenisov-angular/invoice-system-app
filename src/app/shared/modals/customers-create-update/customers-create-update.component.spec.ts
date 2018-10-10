import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersCreateUpdateComponent } from './customers-create-update.component';

describe('CustomersCreateUpdateComponent', () => {
  let component: CustomersCreateUpdateComponent;
  let fixture: ComponentFixture<CustomersCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
