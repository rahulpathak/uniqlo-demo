import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCountryStatsComponent } from './product-country-stats.component';

describe('ProductCountryStatsComponent', () => {
  let component: ProductCountryStatsComponent;
  let fixture: ComponentFixture<ProductCountryStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCountryStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCountryStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
