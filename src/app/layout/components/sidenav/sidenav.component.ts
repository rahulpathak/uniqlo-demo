import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject } from '@angular/core';
import { Router, NavigationEnd, RouterEvent, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { WINDOW } from 'src/app/shared/services/window.services';
import { FilterBoxComponent } from '../../filter-box/filter-box.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  hideFilter: boolean;

  @ViewChild('sideMenu') sideMenu: ElementRef;
  @ViewChild(FilterBoxComponent, {read: ElementRef}) filterBox !: ElementRef;

  constructor(@Inject(WINDOW) private window: Window, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.hideFilter = this.route.snapshot.firstChild.data.hideFilter;
    this.router.events.pipe(
      filter((e: RouterEvent) => e instanceof NavigationEnd)
    ).subscribe((e: RouterEvent) => {
      this.hideFilter = this.route.snapshot.firstChild.data.hideFilter;
    });
  }
}
