import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/model/actions';



@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {

  actions: Action[];

  action2: Action[];

  constructor() { }

  actionClicked(a: Action) {
    alert(`Vous avez cliqué ${a.title}`);
  }

  ngOnInit() {
    this.actions = [
      { title: 'Fichier', icon: 'file' },
      { title: 'Edition', icon: 'edit' },
      { title: 'Enregistrer', icon: 'save' }
    ];
    this.action2 = [
      { title: 'Facebook', icon: 'fb' },
      { title: 'Twitter', icon: 'twitter' }
    ];
  }
}


