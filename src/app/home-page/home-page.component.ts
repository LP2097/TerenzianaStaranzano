import {Component, Inject, OnInit} from '@angular/core';
import {AosToken} from '../aos';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


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

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '100%',
        height: '1000px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/prato.jpg',
        medium: 'assets/images/prato.jpg',
        big: 'assets/images/prato.jpg'
      },
      {
        small: 'assets/images/calcio2.png',
        medium: 'assets/images/calcio2.png',
        big: 'assets/images/calcio2.png'
      },
      {
        small: 'assets/images/portieri.jpg',
        medium: 'assets/images/portieri.jpg',
        big: 'assets/images/portieri.jpg',
      },
      {
        small: 'assets/images/supercampo.jpg',
        medium: 'assets/images/supercampo.jpg',
        big: 'assets/images/supercampo.jpg',
      },
      {
        small: 'assets/images/fallo.jpg',
        medium: 'assets/images/fallo.jpg',
        big: 'assets/images/fallo.jpg',
      }
    ];
  }



}
