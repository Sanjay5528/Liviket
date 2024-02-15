import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioRendererComponent } from './audio-renderer.component';

describe('AudioRendererComponent', () => {
  let component: AudioRendererComponent;
  let fixture: ComponentFixture<AudioRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudioRendererComponent]
    });
    fixture = TestBed.createComponent(AudioRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
