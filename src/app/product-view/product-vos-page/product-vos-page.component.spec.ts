import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVosPageComponent } from './product-vos-page.component';

describe('ProductVosPageComponent', () => {
  let component: ProductVosPageComponent;
  let fixture: ComponentFixture<ProductVosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductVosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
