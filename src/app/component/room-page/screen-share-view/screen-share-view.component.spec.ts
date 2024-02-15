import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenShareViewComponent } from './screen-share-view.component';

describe('ScreenShareViewComponent', () => {
  let component: ScreenShareViewComponent;
  let fixture: ComponentFixture<ScreenShareViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenShareViewComponent]
    });
    fixture = TestBed.createComponent(ScreenShareViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
