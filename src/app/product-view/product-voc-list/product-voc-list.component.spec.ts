import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVocListComponent } from './product-voc-list.component';

describe('ProductVocListComponent', () => {
  let component: ProductVocListComponent;
  let fixture: ComponentFixture<ProductVocListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductVocListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVocListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
