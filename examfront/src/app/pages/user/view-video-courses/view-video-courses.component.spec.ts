import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVideoCoursesComponent } from './view-video-courses.component';

describe('ViewVideoCoursesComponent', () => {
  let component: ViewVideoCoursesComponent;
  let fixture: ComponentFixture<ViewVideoCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVideoCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVideoCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
