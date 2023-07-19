import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyCoursesComponent } from './view-my-courses.component';

describe('ViewMyCoursesComponent', () => {
  let component: ViewMyCoursesComponent;
  let fixture: ComponentFixture<ViewMyCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
