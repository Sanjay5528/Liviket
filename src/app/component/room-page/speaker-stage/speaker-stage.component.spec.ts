import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerStageComponent } from './speaker-stage.component';

describe('SpeakerStageComponent', () => {
  let component: SpeakerStageComponent;
  let fixture: ComponentFixture<SpeakerStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakerStageComponent]
    });
    fixture = TestBed.createComponent(SpeakerStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
