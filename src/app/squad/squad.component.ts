import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';

class Book {
  constructor(public title) { }
}

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {
  calciatori:Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.calciatori=this.getSquad('/calciatore/0');
    console.log(this.calciatori)

  }

  getSquad(listPath): Observable<any[]>{
    return this.db.list(listPath).valueChanges();
  }

  ngOnInit() {



  }


}
