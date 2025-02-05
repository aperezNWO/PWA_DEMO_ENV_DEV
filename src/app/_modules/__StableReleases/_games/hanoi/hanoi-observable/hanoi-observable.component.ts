import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Disk {
  size: number;
}

@Component({
  selector: 'app-hanoi-tower',
  templateUrl:'./hanoi-observable.component.html',
  styleUrl: './hanoi-observable.component.css',
})
export class HanoiObservableComponent implements OnInit {
  private gameState$ = new BehaviorSubject<Disk[][]>([
    [{ size: 3 }, { size: 2 }, { size: 1 }],
    [],
    []
  ]);

  towers$: Observable<Disk[][]> = this.gameState$.asObservable();

  private movesSubject$ = new BehaviorSubject<number>(0);
  moves$: Observable<number> = this.movesSubject$.asObservable();

  private selectedTower: number | null = null;

  ngOnInit() {
    this.resetGame();
  }

  selectTower(towerIndex: number) {
    if (this.selectedTower === null) {
      this.selectedTower = towerIndex;
    } else {
      this.moveDisk(this.selectedTower, towerIndex);
      this.selectedTower = null;
    }
  }

  moveDisk(fromTower: number, toTower: number) {
    const currentState = this.gameState$.getValue();
    const diskToMove = currentState[fromTower].pop();

    if (diskToMove) {
      const targetTower = currentState[toTower];
      if (targetTower.length === 0 || targetTower[targetTower.length - 1].size > diskToMove.size) {
        targetTower.push(diskToMove);
        this.gameState$.next(currentState);
        this.movesSubject$.next(this.movesSubject$.getValue() + 1);
        this.checkWinCondition();
      } else {
        currentState[fromTower].push(diskToMove);
      }
    }
  }

  resetGame() {
    this.gameState$.next([
      [{ size: 3 }, { size: 2 }, { size: 1 }],
      [],
      []
    ]);
    this.movesSubject$.next(0);
    this.selectedTower = null;
  }

  private checkWinCondition() {
    const currentState = this.gameState$.getValue();
    if (currentState[2].length === 3) {
      console.log('Congratulations! You solved the puzzle!');
      // You can add more win condition logic here
    }
  }
}