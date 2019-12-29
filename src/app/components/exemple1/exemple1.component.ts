import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exemple1',
  templateUrl: './exemple1.component.html',
  styleUrls: ['./exemple1.component.scss']
})
export class Exemple1Component implements OnInit {

  data: Array<any> = [];

  $observable: Observable<string>;



  constructor() {
    this.$observable = new Observable(observer => {
      observer.next('Salam');
      observer.next('Alikoum');
    });
  }

  click() {
    this.$observable.subscribe(
      s => this.data.push(s)
    );
  }

  ngOnInit() {
  }

}
