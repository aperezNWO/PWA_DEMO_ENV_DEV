import { Component, OnInit } from '@angular/core';
import { ObservableService } from 'src/app/_services/observable/observable.service';

@Component({
  selector: 'app-rx-jsplayground',
  templateUrl: './rx-jsplayground.component.html',
  styleUrl: './rx-jsplayground.component.css'
})
export class RxJSPlaygroundComponent implements OnInit {
  //
  constructor(public service : ObservableService,)
  {
      
  }
  //
  ngOnInit(): void {
  
  }
}
