import { Component, OnInit } from '@angular/core';
import {
  Router
  , NavigationStart
  , NavigationEnd
  , NavigationCancel
  , NavigationError
  , Event
} from '@angular/router';

@Component({
  selector: 'shivafdn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'shiva-foundation';
  loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      console.log('event', event);
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
