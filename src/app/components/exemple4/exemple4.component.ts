import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/services/training/training.service';
import { Observable, interval, timer } from 'rxjs';
import { map, tap, take, mergeMap, mergeAll, mergeMapTo, switchMap, concatMap, delay } from 'rxjs/operators';
import { Training } from 'src/app/model/training';

@Component({
  selector: 'app-exemple4',
  templateUrl: './exemple4.component.html',
  styleUrls: ['./exemple4.component.scss']
})
export class Exemple4Component implements OnInit {

  obs1: Observable<Training>;



  obs2: Observable<string>;

  obs3: Observable<Training>;

  obs4: Observable<Training>;

  obs5: Observable<Training>;

  obs6: Observable<Training>;

  obs7: Observable<Training>;

  obs8: Observable<Training>;


  constructor(private $ser: TrainingService) {
    this.obs1 = $ser.getData();
    this.obs2 = $ser.getData().pipe(
      map(t => t.title)
    );
    this.obs3 = $ser.getData().pipe(
      tap(s => s.evaluation = s.evaluation + 1)
    );
    this.obs4 = $ser.getData().pipe(take(2));
    this.obs5 = $ser.getData().pipe(delay(1000));
    this.obs6 = $ser.getData().pipe(
      mergeMap(x => timer(1000).pipe(map(s => x)))
    );
    this.obs7 = $ser.getData().pipe(
      switchMap(x => timer(1000).pipe(map(s => x)))
    );
    this.obs8 = $ser.getData().pipe(
      concatMap(x => timer(1000).pipe(map(s => x)))
    );
  }

  ngOnInit() {

  }

}
