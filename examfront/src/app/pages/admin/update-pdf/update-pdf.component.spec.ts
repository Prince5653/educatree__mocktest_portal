import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePdfComponent } from './update-pdf.component';

describe('UpdatePdfComponent', () => {
  let component: UpdatePdfComponent;
  let fixture: ComponentFixture<UpdatePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
