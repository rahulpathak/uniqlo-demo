import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGradientBarComponent } from './color-gradient-bar.component';

describe('ColorGradientBarComponent', () => {
  let component: ColorGradientBarComponent;
  let fixture: ComponentFixture<ColorGradientBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorGradientBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorGradientBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
