import {AngularFireDatabase} from 'angularfire2/database';
import * as _ from 'underscore';
import * as moment from 'moment';
import {Component, ElementRef, OnInit} from '@angular/core';
import {Match} from '../Models/MarchModel';
import {Observable, Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-match-first-squad',
  templateUrl: './match-first-squad.component.html',
  styleUrls: ['./match-first-squad.component.css']
})


export class MatchFirstSquadComponent implements OnInit {

  match;
  all;
  config;
  matchPlayed: Match;
  matchWillPlay: Match;
  nextMatch;

  private future: Date;
  private futureString: string;
  private counter$: Observable<number>;
  private subscription: Subscription;
  message: string;


  days;
  hours;
  minutes;
  seconds;

  constructor(private db: AngularFireDatabase,private elm: ElementRef) {
    this.getList();
  }
  ngOnInit() {
  }



  getList() {
    this.db.list('PrimaSquadra/Partite').valueChanges().subscribe(items => {
      this.match = items;
      this.all = items;

      this.getMatchPlayed();
      /*JSON.stringify(this.match);
      console.log(this.match);*/
    });
  }

  //Divisione delle partitie in partite da giocare e giocate e ordinamento di quelle da giocare assegnando quando si gioca la prossima partita
  getMatchPlayed() {
    let list = _.groupBy(this.all, 'Risultato')
    this.matchWillPlay = list.null

      for (let i = 0; i < this.match.length; i++) {
        if (this.match[i].Risultato != "null") {
          this.matchPlayed = this.match[i]
        }
      }

    //console.log(JSON.stringify("Partite da disputare: " + this.matchWillPlay))
    let listOredered = _.sortBy(this.matchWillPlay, function (item) {
      return item.Ord
    })
    //Assegnamneto della prossima partita
    this.nextMatch = listOredered[0];
    this.getCountDown(JSON.stringify(this.nextMatch.Data))

  }

  //Mi ritorna il tempo che manca al prossimo match
  //GESTIONE COUNTDOWN

  getCountDown(date: string){
    this.future = new Date(this.nextMatch.Data);
    this.counter$ = Observable.interval(1000).map((x) => {
      return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
    });

    this.subscription = this.counter$.subscribe((x) => this.message = this.dhms(x));
  }

  dhms(t) {

    this.days = Math.floor(t / 86400);
    t -= this.days * 86400;
    this.hours = Math.floor(t / 3600) % 24;
    t -= this.hours * 3600;
    this.minutes = Math.floor(t / 60) % 60;
    t -= this.minutes * 60;
    this.seconds = t % 60;

    return "";
    /*
    return [
      days + '  DAY',
      hours + '  HOURS',
      minutes + '  MINUTES',
      seconds + '  SECONDS'
    ].join(' ');*/
  }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }




}
