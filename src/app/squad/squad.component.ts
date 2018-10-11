import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireStorage} from 'angularfire2/storage';
import * as _ from 'underscore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent  {

  items;
  image;
  all;
  imageArray=[]

  constructor(public db: AngularFireDatabase, private storage: AngularFireStorage) {

    const promises = [];
    this.getList();


  }


  getList(){

    this.db.list('PrimaSquadra/Calciatori').valueChanges().subscribe(items => {
      this.items = items;
      this.all = items;
      JSON.stringify(this.items);
      console.log(this.items);
      this.getImage();

    });

  }

  getAll(){
    this.items= this.all
  }

  getFoward(){
    let list =_.groupBy(this.all,function (item) {
      return item.ruolo
    } );
    this.items=list.Attaccante
  }

  getMidfielder(){
    let list =_.groupBy(this.all,function (item) {
      return item.ruolo
    } );
    this.items=list.Centrocampista
  }
  getDefender(){
    let list =_.groupBy(this.all,function (item) {
      return item.ruolo
    } );
    this.items=list.Difensore
  }
  getGoalKeeper(){
   let list =_.groupBy(this.all,function (item) {
      return item.ruolo
    } );
    this.items=list.Portiere
  }




  getImage(){

    var storageRef = firebase.storage().ref();
    // Create a reference to the file we want to download
    for(let i =0 ; i < this.all.length; i++) {
      var starsRef = storageRef.child('FotoPrimaSquadra/'+i+'.jpg');
      // Get the download URL
      starsRef.getDownloadURL().then(url => this.imageArray[i] = url);
      console.log(JSON.stringify(this.imageArray[i]))
    }
  }



}
