import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shivafdn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public carouselImages: Array<any>;

  constructor() { }

  ngOnInit() {
    this.carouselImages = [
      {
        imgName:'carousel-01', alt: 'source not found'
      },
      {
        imgName:'carousel-02', alt: 'source not found'
      },
      {
        imgName:'carousel-03', alt: 'source not found'
      },
      {
        imgName:'carousel-04', alt: 'source not found'
      },
      {
        imgName:'carousel-05', alt: 'source not found'
      }/* ,
      {
        imgName:'carousel-06', alt: 'source not found'
      } */
    ];
  }

}
