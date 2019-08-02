import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { XlsxDataService } from 'src/app/rootServices/xlsx-data.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  hideFilter: boolean;
  filterJson: any = {};

  constructor(
    private xls: XlsxDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.hideFilter = this.route.snapshot.firstChild.data.hideFilter;
    this.router.events.pipe(
      filter((e: RouterEvent) => e instanceof NavigationEnd)
    ).subscribe((e:RouterEvent) => {
      this.hideFilter = this.route.snapshot.firstChild.data.hideFilter;
    });

    this.xls.getFilterJson().subscribe(filterJson => this.filterJson = filterJson)
  }

  toogleFilter(key, filter?) {
    if(!this.filterJson[key]) {
      this.filterJson[key] = [];
    }
    if(this.checkFilterExists(key, filter)) {
      this.filterJson[key] = this.filterJson[key].filter(x => x.toLowerCase() != filter.toLowerCase());
    } else if(filter) {
      this.filterJson[key].push(filter);
    }
    this.xls.triggerFilter(this.filterJson);
  }

  checkFilterExists(key, filter?) {
    let filterKeyExists = this.filterJson && this.filterJson[key] && this.filterJson[key].length > 0;
    if(filterKeyExists) {
      if(filter) {
        return this.filterJson[key].some(x => x.toLowerCase() === filter.toLowerCase());
      }
      return true;
    }
    return false;
  }

  isFilterEmpty() {
    if(!this.filterJson || typeof this.filterJson != 'object') return false;
    for(let key in this.filterJson) {
      if(this.filterJson[key] && this.filterJson[key].length > 0)
        return true;
    }
    return false;
  }

}
