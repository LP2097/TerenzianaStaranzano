import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AosToken, aos } from './aos';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SquadComponent } from './squad/squad.component';
import { HistoryComponent } from './history/history.component';
import { StaffComponent } from './staff/staff.component';
import { ContactComponent } from './contact/contact.component';
import {StorageService} from './storage.service';


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
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
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
