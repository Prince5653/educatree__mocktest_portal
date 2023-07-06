import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVideoUrlComponent } from './update-video-url.component';

describe('UpdateVideoUrlComponent', () => {
  let component: UpdateVideoUrlComponent;
  let fixture: ComponentFixture<UpdateVideoUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVideoUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVideoUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
