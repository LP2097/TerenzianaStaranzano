import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from 'angularfire2/storage';
import {AngularFireDatabase} from 'angularfire2/database';
import { Optional } from "@angular/core";




@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news;
  all;

  constructor(public db: AngularFireDatabase, private storage: AngularFireStorage) {

    const promises = [];
    this.getList();


  }


  getList(){

    this.db.list('News').valueChanges().subscribe(items => {
      this.news = items;
      this.all = items;

      console.log(JSON.stringify(this.news));


    });

  }




  ngOnInit() {
  }

}
