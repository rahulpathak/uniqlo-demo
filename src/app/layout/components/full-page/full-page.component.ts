import { Component, OnInit, ViewEncapsulation, Inject, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from 'src/app/shared/services/window.services';

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FullPageComponent implements OnInit {
  @ViewChild('sideNav') sideNav: ElementRef;
  showMenuClass: string = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {
  }

  ngOnInit() {
  }

  toggleSideMenu(show) {
    this.showMenuClass = !show ? 'hide-side-nav' : '';
  }

  // @HostListener("window:scroll", [])
  // onWindowScroll() {
  //   const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  //   const sideNavBound: DOMRect = this.sideNav.nativeElement.getBoundingClientRect();
  //   // console.log(offset, this.window.innerHeight, sideNavBound);
  //   let sidenavtop = offset + 45;
  //   console.log(sidenavtop);
  //   if (this.window.innerHeight < (sideNavBound.height + 45)) {
  //     sidenavtop = sidenavtop + this.window.innerHeight - sideNavBound.height;
  //   }
  //   sidenavtop = sidenavtop > 0 ? sidenavtop : 0;
  //   console.log(sidenavtop);
  //   this.sideNav.nativeElement.style.top = sidenavtop + "px";
  // }

}
