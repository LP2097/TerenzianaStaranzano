import {AngularFireDatabase} from 'angularfire2/database';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-first-squad',
  templateUrl: './match-first-squad.component.html',
  styleUrls: ['./match-first-squad.component.css']
})
export class MatchFirstSquadComponent implements OnInit {

  constructor(private db: AngularFireDatabase) {

    this.getList()
  }

  ngOnInit() {
  }


  match;
  all;

  getList(){

    this.db.list('PrimaSquadra/Partite').valueChanges().subscribe(items => {
      this.match = items;
      this.all = items;
      JSON.stringify(this.match);
      console.log(this.match);

    });

  }
}
