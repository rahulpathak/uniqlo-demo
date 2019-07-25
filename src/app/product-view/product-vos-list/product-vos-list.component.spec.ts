import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVosListComponent } from './product-vos-list.component';

describe('ProductVosListComponent', () => {
  let component: ProductVosListComponent;
  let fixture: ComponentFixture<ProductVosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductVosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
