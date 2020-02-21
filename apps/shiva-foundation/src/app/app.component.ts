import { Component, OnInit, Inject } from '@angular/core';
import {
  Router
  , NavigationStart
  , NavigationEnd
  , NavigationCancel
  , NavigationError
  , Event
} from '@angular/router';
import {DOCUMENT} from "@angular/common";
import { environment } from '../environments/environment';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'shivafdn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'shiva-foundation';
  loading = false;

  constructor(private _router: Router, @Inject(DOCUMENT) private _document) {
    const bases = this._document.getElementsByTagName('base');

    if (bases.length > 0) {
      bases[0].setAttribute('href', environment.baseHref);
    }

    this._router.events.subscribe((event: Event) => {
      // console.log('event', event);
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
  ngOnInit(){}
}
