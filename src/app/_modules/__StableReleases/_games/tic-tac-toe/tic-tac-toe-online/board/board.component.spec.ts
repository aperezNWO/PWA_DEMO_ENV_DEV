import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardOnlineComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardOnlineComponent;
  let fixture: ComponentFixture<BoardOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardOnlineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
