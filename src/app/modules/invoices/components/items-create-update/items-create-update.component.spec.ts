import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCreateUpdateComponent } from './items-create-update.component';

describe('ItemsCreateUpdateComponent', () => {
  let component: ItemsCreateUpdateComponent;
  let fixture: ComponentFixture<ItemsCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
