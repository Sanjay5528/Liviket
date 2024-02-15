import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRendererComponent } from './video-renderer.component';

describe('VideoRendererComponent', () => {
  let component: VideoRendererComponent;
  let fixture: ComponentFixture<VideoRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoRendererComponent]
    });
    fixture = TestBed.createComponent(VideoRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
