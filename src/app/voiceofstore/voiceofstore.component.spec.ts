import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceofstoreComponent } from './voiceofstore.component';

describe('VoiceofstoreComponent', () => {
  let component: VoiceofstoreComponent;
  let fixture: ComponentFixture<VoiceofstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceofstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceofstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
