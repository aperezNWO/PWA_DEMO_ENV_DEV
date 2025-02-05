import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hanoi3dComponent } from './hanoi3d.component';

describe('Hanoi3dComponent', () => {
  let component: Hanoi3dComponent;
  let fixture: ComponentFixture<Hanoi3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hanoi3dComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hanoi3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
