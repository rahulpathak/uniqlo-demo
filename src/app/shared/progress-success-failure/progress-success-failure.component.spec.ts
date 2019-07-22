import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSuccessFailureComponent } from './progress-success-failure.component';

describe('ProgressSuccessFailureComponent', () => {
  let component: ProgressSuccessFailureComponent;
  let fixture: ComponentFixture<ProgressSuccessFailureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSuccessFailureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSuccessFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
