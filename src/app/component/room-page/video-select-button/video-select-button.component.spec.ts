import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSelectButtonComponent } from './video-select-button.component';

describe('VideoSelectButtonComponent', () => {
  let component: VideoSelectButtonComponent;
  let fixture: ComponentFixture<VideoSelectButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoSelectButtonComponent]
    });
    fixture = TestBed.createComponent(VideoSelectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
