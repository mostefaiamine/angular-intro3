import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.scss']
})
export class BestComponent implements OnInit {

  count = 0;

  constructor(private $ser: TrainingService) { }

  ngOnInit() {
    this.$ser.observable.subscribe(s => this.count = s.filter(e => e.evaluation > 2).length);
  }

}
