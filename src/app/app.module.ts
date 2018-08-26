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


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SquadComponent,
    HistoryComponent,
    StaffComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgxGalleryModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyByzKjemv3U7zciSsSKyEnapmI5fluKAUg'
    }),
    RouterModule.forRoot([
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      { path: 'Squad', component: SquadComponent },
      { path: 'History', component: HistoryComponent },
      { path: 'Staff', component: StaffComponent },
      { path: 'Contact', component: ContactComponent },

    ]/*, { useHash : true}*/)
  ],
  providers: [StorageService, { provide: AosToken, useValue: aos }],
  bootstrap: [AppComponent]
})
export class AppModule { }
