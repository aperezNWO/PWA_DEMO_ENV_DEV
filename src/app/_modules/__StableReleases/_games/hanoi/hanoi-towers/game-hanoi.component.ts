import { Component,             } from '@angular/core';
import { HanoiEngine            } from 'src/app/_engines/hanoi-engine';
//
@Component({
  selector: 'app-games-hanoi',
  templateUrl: './game-hanoi.component.html',
  styleUrls: ['./game-hanoi.component.css']
})
//
export class HanoiTowersComponent {
  //
  constructor(public hanoiEngine : HanoiEngine){

  }
}
