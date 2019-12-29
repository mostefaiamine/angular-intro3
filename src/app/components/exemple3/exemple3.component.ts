import { Component, OnInit } from '@angular/core';
import { Observable, of, timer, interval } from 'rxjs';

@Component({
  selector: 'app-exemple3',
  templateUrl: './exemple3.component.html',
  styleUrls: ['./exemple3.component.scss']
})
export class Exemple3Component implements OnInit {

  obs1: Observable<string[]>;

  obs2: Observable<number>;

  obs3: Observable<number>;

  intervalData: Array<number> = [];

  timerData: Array<any> = [];

  constructor() {
    this.obs1 = of(['Sunday', 'Monday', 'Tuesday']);
    this.obs2 = interval(1000);
    const sub = this.obs2.subscribe(
      s => {
        this.intervalData.push(s);
        if (s === 5) {
          sub.unsubscribe();
        }
      }
    );
    this.obs3 = timer(3000);
    this.obs3.subscribe(
      s => this.timerData.push('Hello')
    );

  }

  ngOnInit() {

  }

}
