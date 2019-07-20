import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceofcustomerComponent } from './voiceofcustomer.component';

describe('VoiceofcustomerComponent', () => {
  let component: VoiceofcustomerComponent;
  let fixture: ComponentFixture<VoiceofcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceofcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceofcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
