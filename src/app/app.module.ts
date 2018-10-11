import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AosToken, aos } from './aos';
import 'hammerjs';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SquadComponent } from './squad/squad.component';
import { HistoryComponent } from './history/history.component';
import { StaffComponent } from './staff/staff.component';
import { ContactComponent } from './contact/contact.component';
import {StorageService} from './storage.service';
import { AgmCoreModule } from '@agm/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { MatchFirstSquadComponent } from './match-first-squad/match-first-squad.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NewsComponent } from './news/news.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SquadComponent,
    HistoryComponent,
    StaffComponent,
    ContactComponent,
    MatchFirstSquadComponent,
    GalleryComponent,
    NewsComponent,


  ],
  imports: [
    BrowserModule,
    NgxGalleryModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyByzKjemv3U7zciSsSKyEnapmI5fluKAUg'
    }),
    RouterModule.forRoot([
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      { path: 'FirstSquad', component: SquadComponent },
      { path: 'History', component: HistoryComponent },
      { path: 'Staff', component: StaffComponent },
      { path: 'Contact', component: ContactComponent },
      { path: 'FirstSquadMatch', component: MatchFirstSquadComponent },
      { path: 'Gallery', component: GalleryComponent },
      { path: 'News', component:NewsComponent}

    ]/*, { useHash : true}*/)
  ],
  providers: [StorageService, { provide: AosToken, useValue: aos }],
  bootstrap: [AppComponent]
})
export class AppModule { }
