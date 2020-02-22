import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
import { NavItems } from '../../models/nav-type';
import { nvigationLink } from '../../models/nav';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'shivafdn-hav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('headerSection', { static: false }) headerSection: ElementRef
  public isMenuCollapsed: boolean;
  public socialIcon: Array<any>;
  public navLinks: Array<NavItems>;
  public addClass:boolean;
  constructor(private _router: Router) { }

  ngOnInit() {
    this.addClass = false;
    this.isMenuCollapsed = true;
    this.navLinks = nvigationLink;
    this.socialIcon = [
      'fa-facebook',
      'fa-google-plus',
      'fa-twitter',
      'fa-vimeo',
      'fa-linkedin'
    ];
    if (this._router.url !== '/home') {
      this.addClass = true;
    }
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url !== '/home') {
          this.addClass = true;
        } else {
          this.addClass = false;
        }
      }
    });
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
    if (this._router.url === '/home') {
      if (window.pageYOffset > 20) {
        this.headerSection.nativeElement.classList.add('menu-fixed', 'animated', 'fadeInDown');
      } else {
        this.headerSection.nativeElement.classList.remove('menu-fixed', 'animated', 'fadeInDown');
      }
    }
  }
}
