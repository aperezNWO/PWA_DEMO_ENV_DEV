import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanoiAutoComponent } from './hanoi-auto.component';

describe('HanoiAutoComponent', () => {
  let component: HanoiAutoComponent;
  let fixture: ComponentFixture<HanoiAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HanoiAutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HanoiAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
