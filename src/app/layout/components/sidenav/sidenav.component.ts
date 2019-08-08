import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject } from '@angular/core';
import { Router, NavigationEnd, RouterEvent, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { WINDOW } from 'src/app/shared/services/window.services';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  @ViewChild('sideMenu') sideMenu: ElementRef;

  fixedHeight: number;
  navHeightAll: boolean = true;

  constructor(@Inject(WINDOW) private window: Window, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.navHeightAll = this.route.snapshot.firstChild.data.navHeightAll;
    this.router.events.pipe(
      filter((e: RouterEvent) => e instanceof NavigationEnd)
    ).subscribe((e: RouterEvent) => {
      this.navHeightAll = this.route.snapshot.firstChild.data.navHeightAll;
    });
  }

  ngAfterViewInit() {
    const offset = this.window.innerHeight - 45;
    this.fixedHeight = this.sideMenu.nativeElement.offsetHeight;
    const navHeight = offset - 413;
    this.sideMenu.nativeElement.style.height = navHeight + 'px';
    this.sideMenu.nativeElement.style.overflow = 'auto';
  }
}
