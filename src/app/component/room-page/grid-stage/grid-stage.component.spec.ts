import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridStageComponent } from './grid-stage.component';

describe('GridStageComponent', () => {
  let component: GridStageComponent;
  let fixture: ComponentFixture<GridStageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridStageComponent]
    });
    fixture = TestBed.createComponent(GridStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
