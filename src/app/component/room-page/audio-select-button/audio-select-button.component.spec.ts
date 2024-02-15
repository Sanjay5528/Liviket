import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioSelectButtonComponent } from './audio-select-button.component';

describe('AudioSelectButtonComponent', () => {
  let component: AudioSelectButtonComponent;
  let fixture: ComponentFixture<AudioSelectButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioSelectButtonComponent]
    });
    fixture = TestBed.createComponent(AudioSelectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
