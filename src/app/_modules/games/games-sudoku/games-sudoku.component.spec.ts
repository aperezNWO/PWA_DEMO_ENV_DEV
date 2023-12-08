import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesSudokuComponent } from './games-sudoku.component';

describe('GamesSudokuComponent', () => {
  let component: GamesSudokuComponent;
  let fixture: ComponentFixture<GamesSudokuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesSudokuComponent]
    });
    fixture = TestBed.createComponent(GamesSudokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
