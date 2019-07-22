import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceStoreTableComponent } from './voice-store-table.component';

describe('VoiceStoreTableComponent', () => {
  let component: VoiceStoreTableComponent;
  let fixture: ComponentFixture<VoiceStoreTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceStoreTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceStoreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
