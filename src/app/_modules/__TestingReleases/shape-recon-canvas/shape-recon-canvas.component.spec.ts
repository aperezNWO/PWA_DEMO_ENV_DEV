import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeReconCanvasComponent } from './shape-recon-canvas.component';

describe('ShapeReconCanvasComponent', () => {
  let component: ShapeReconCanvasComponent;
  let fixture: ComponentFixture<ShapeReconCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapeReconCanvasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShapeReconCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
