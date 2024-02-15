import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileStageComponent } from './mobile-stage.component';

describe('MobileStageComponent', () => {
  let component: MobileStageComponent;
  let fixture: ComponentFixture<MobileStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileStageComponent]
    });
    fixture = TestBed.createComponent(MobileStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
