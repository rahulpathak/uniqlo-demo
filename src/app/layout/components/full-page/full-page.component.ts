import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterEvent, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FullPageComponent implements OnInit {
  showMenuClass: string = '';

  constructor(
    private router: Router
  ) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }

  ngOnInit() {
  }

  toggleSideMenu(show) {
    this.showMenuClass = show ? 'open-side-nav' : '';
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.toggleSideMenu(false);
    }
  }

}
