import {Component, Inject, OnInit} from '@angular/core';
import {AosToken} from '../aos';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(@Inject(AosToken) aos) {  aos.init();
    window.addEventListener('load', function() {
      aos.refresh();

    });}

  shouldStick;

  ngOnInit() {
  }

  bingScrollEvent() {
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 100) {
        this.shouldStick = true;
      } else {
        this.shouldStick = false;
      }
    });
  }

}
