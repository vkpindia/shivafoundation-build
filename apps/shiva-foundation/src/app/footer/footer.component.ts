import { Component, OnInit } from '@angular/core';
import { nvigationLink } from '../header/nav';
import { NavItems } from '../header/nav-type';

@Component({
  selector: 'shivafdn-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public socialIcon: Array<any>;
  public navLinks: Array<NavItems>;
  constructor() { }

  ngOnInit() {
    this.navLinks = nvigationLink;
    this.socialIcon = [
      {name: 'facebook', icon:'fa-facebook'},
      {name: 'Google+', icon:'fa-google-plus'},
      {name: 'Twitter', icon:'fa-twitter'},
      {name: 'Vimeo', icon:'fa-vimeo'},
      {name: 'Linkedin', icon:'fa-linkedin'}
    ];
  }
}
