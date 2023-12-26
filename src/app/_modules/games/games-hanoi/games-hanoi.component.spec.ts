import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesHanoiComponent } from './games-hanoi.component';

describe('GamesHanoiComponent', () => {
  let component: GamesHanoiComponent;
  let fixture: ComponentFixture<GamesHanoiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesHanoiComponent]
    });
    fixture = TestBed.createComponent(GamesHanoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
