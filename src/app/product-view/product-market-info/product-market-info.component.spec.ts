import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMarketInfoComponent } from './product-market-info.component';

describe('ProductMarketInfoComponent', () => {
  let component: ProductMarketInfoComponent;
  let fixture: ComponentFixture<ProductMarketInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductMarketInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMarketInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
