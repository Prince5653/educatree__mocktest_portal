import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourseVideosComponent } from './view-course-videos.component';

describe('ViewCourseVideosComponent', () => {
  let component: ViewCourseVideosComponent;
  let fixture: ComponentFixture<ViewCourseVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCourseVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCourseVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
