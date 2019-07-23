import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductKeywordsRelationComponent } from './product-keywords-relation.component';

describe('ProductKeywordsRelationComponent', () => {
  let component: ProductKeywordsRelationComponent;
  let fixture: ComponentFixture<ProductKeywordsRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductKeywordsRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductKeywordsRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
