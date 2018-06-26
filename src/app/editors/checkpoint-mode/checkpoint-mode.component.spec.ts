import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpointModeComponent } from './checkpoint-mode.component';

describe('CheckpointModeComponent', () => {
  let component: CheckpointModeComponent;
  let fixture: ComponentFixture<CheckpointModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckpointModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckpointModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
