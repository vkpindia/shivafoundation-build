import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'shivafdn-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public showForm: boolean;
  constructor(private _router: Router, private _eleRef: ElementRef) { }

  ngOnInit() {
    this.showForm = true;
    if (this._router.url === '/home') {
      this.showForm = false;
    }
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url === '/home') {
          this.showForm = false;
        } else {
          this.showForm = true;
          // this._eleRef.nativeElement.querySelector('.header-section').classList.add('menu-fixed');
        }
      }
    });
  }
}
