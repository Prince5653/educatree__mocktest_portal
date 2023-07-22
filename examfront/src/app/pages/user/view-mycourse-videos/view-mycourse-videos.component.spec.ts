import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMycourseVideosComponent } from './view-mycourse-videos.component';

describe('ViewMycourseVideosComponent', () => {
  let component: ViewMycourseVideosComponent;
  let fixture: ComponentFixture<ViewMycourseVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMycourseVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMycourseVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
