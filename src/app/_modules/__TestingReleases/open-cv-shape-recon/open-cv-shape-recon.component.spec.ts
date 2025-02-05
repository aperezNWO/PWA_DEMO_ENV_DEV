import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCvShapeReconComponent } from './open-cv-shape-recon.component';

describe('OpenCvShapeReconComponent', () => {
  let component: OpenCvShapeReconComponent;
  let fixture: ComponentFixture<OpenCvShapeReconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenCvShapeReconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenCvShapeReconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
