import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanoiTowerComponent } from './hanoi-observable.component';

describe('HanoiTowersComponent', () => {
  let component: HanoiTowerComponent;
  let fixture: ComponentFixture<HanoiTowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HanoiTowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HanoiTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
