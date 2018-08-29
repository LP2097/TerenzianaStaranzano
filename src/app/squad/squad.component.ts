import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireStorage} from 'angularfire2/storage';
import * as _ from 'underscore';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent  {

  items;
  ordinata;
  profileUrl;
  i;

  constructor(public db: AngularFireDatabase, private storage: AngularFireStorage) {


    db.list('PrimaSquadra/Calciatori').valueChanges().subscribe(items => {
      this.items = items;
      this.getList()
      JSON.stringify(this.items);
      console.log(this.items);

    });

  }


  getList(){
    let list =_.groupBy(this.items,'ruolo' );
    console.log("la lista ordinata"+list)
    this.ordinata=list;
  }


}
