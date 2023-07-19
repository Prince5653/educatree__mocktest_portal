import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyCourseVideosComponent } from './view-my-course-videos.component';

describe('ViewMyCourseVideosComponent', () => {
  let component: ViewMyCourseVideosComponent;
  let fixture: ComponentFixture<ViewMyCourseVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyCourseVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyCourseVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
