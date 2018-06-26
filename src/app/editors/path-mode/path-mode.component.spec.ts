import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathModeComponent } from './path-mode.component';

describe('PathModeComponent', () => {
  let component: PathModeComponent;
  let fixture: ComponentFixture<PathModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
