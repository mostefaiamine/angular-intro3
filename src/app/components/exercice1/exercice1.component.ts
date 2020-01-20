import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { MovieService } from 'src/app/services/movie/movie.service';
import { error } from 'protractor';




@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {




  constructor(private $ser: MovieService) { }

  click() {
    this.$ser.GetData().subscribe(
      s => alert('OK'),
      err => {
        alert('error');
        console.log(err);
      }
    );
  }

  ngOnInit() {


  }
}


