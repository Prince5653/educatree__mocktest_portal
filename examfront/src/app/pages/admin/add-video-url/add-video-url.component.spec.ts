import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVideoUrlComponent } from './add-video-url.component';

describe('AddVideoUrlComponent', () => {
  let component: AddVideoUrlComponent;
  let fixture: ComponentFixture<AddVideoUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVideoUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVideoUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
