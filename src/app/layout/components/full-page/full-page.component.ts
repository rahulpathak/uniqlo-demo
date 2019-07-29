import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { XlsxDataService } from 'src/app/rootServices/xlsx-data.service';

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FullPageComponent implements OnInit {
  showMenuClass: string = '';

  constructor() {    
  }

  ngOnInit() {
  }

  toggleSideMenu(show) {
    this.showMenuClass = !show ? 'hide-side-nav' : '';
  }

}
