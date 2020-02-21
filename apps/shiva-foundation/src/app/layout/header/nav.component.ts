import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
import { NavItems } from '../../models/nav-type';
import { nvigationLink } from '../../models/nav';

@Component({
  selector: 'shivafdn-hav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('headerSection', {static: false}) headerSection: ElementRef
  public isMenuCollapsed: boolean;
  public socialIcon: Array<any>;
  public navLinks: Array<NavItems>;

  constructor() { }

  ngOnInit() {
    this.isMenuCollapsed = true;
    this.navLinks = nvigationLink;
    this.socialIcon = [
      'fa-facebook',
      'fa-google-plus',
      'fa-twitter',
      'fa-vimeo',
      'fa-linkedin'
    ];
  }

  @HostListener('window:scroll', ['$event'])
  /**
   * @description Method to trigger on 20px window scroll to fix header on top
   * @author Virendra Pandey
   * @date 2019-11-24
   * @param {*} e
   * @memberof HeaderComponent
   */
  onWindowScroll(e) {
    if (window.pageYOffset > 20) {
      this.headerSection.nativeElement.classList.add('menu-fixed', 'animated', 'fadeInDown');
    } else {
      this.headerSection.nativeElement.classList.remove('menu-fixed', 'animated', 'fadeInDown');
    }
  }
}
