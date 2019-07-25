import { Component, OnInit } from '@angular/core';
import { XlsxDataService } from 'src/app/rootServices/xlsx-data.service';
import { Router, NavigationEnd, RouterEvent, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent implements OnInit {

  country = [
    { 'id': 'usa', 'display': 'USA' },
    { 'id': 'japan', 'display': 'Japan' },
    // { 'id': 'india', 'display': 'India' },
    // { 'id': 'malaysia', 'display': 'Malaysia' },
    // { 'id': 'russia', 'display': 'Russia' },
    // { 'id': 'singapore', 'display': 'Singapore' },
    // { 'id': 'unitedkingdom', 'display': 'United Kingdom' }
  ];

  category = [
    { 'id': 'tops', 'display': 'Tops' },
    { 'id': 'outerwear', 'display': 'Outerwear' },
    { 'id': 'bottoms', 'display': 'Bottoms' },
    { 'id': 'activewear', 'display': 'Activewear' },
    { 'id': 'dnj', 'display': 'Dresses and Jumpsuits' },
    { 'id': 'accandshoes', 'display': 'Accessories and Shoes' }
  ];

  sub_category = [
    { 'id': 'jeans', 'display': 'Jeans' },
    { 'id': 'tshirts', 'display': 'T-Shirts' },
    { 'id': 'dshirts', 'display': 'Dress Shirt' },
    { 'id': 'shirtsandblouses', 'display': 'Shirts and Blouses' },
    { 'id': 'shorts', 'display': 'Shorts' },
    { 'id': 'pants', 'display': 'Pants' },
    { 'id': 'jackets', 'display': 'Jackets' },
    { 'id': 'pshirts', 'display': 'Polo Shirt' },
    { 'id': 'pullovers', 'display': 'Pullovers' }
  ];

  age_cat = [
    { 'id': 'age1', 'display': '12-18' },
    { 'id': 'age2', 'display': '18-28' },
    { 'id': 'age3', 'display': '28-40' },
    { 'id': 'age4', 'display': '40-50' },
    { 'id': 'age5', 'display': '50-70' },
    { 'id': 'age6', 'display': '70-90' }
  ];

  size_cat = [
    { 'id': 'xxsmall', 'display': 'XXS' },
    { 'id': 'xsmall', 'display': 'XS' },
    { 'id': 'small', 'display': 'S' },
    { 'id': 'medium', 'display': 'M' },
    { 'id': 'learge', 'display': 'L' },
    { 'id': 'xlearge', 'display': 'XL' },
    { 'id': 'xxlearge', 'display': 'XXL' }
  ];

  fabric_cat = [
    { 'id': 'cotton', 'display': 'Cotton' },
    { 'id': 'jersey', 'display': 'Jersey' },
    { 'id': 'linen', 'display': 'Linen' },
    { 'id': 'silk', 'display': 'Silk' },
    { 'id': 'canvas', 'display': 'Canvas' },
    { 'id': 'lycra', 'display': 'Lycra' },
    { 'id': 'lace', 'display': 'Lace' },
    { 'id': 'velvet', 'display': 'Velvet' }
  ];

  color_cat = [
    { 'id': 'black', 'display': 'Black' },
    { 'id': 'blue', 'display': 'Blue' },
    { 'id': 'brown', 'display': 'Brown' },
    { 'id': 'white', 'display': 'White' },
    { 'id': 'yellow', 'display': 'Yellow' },
    { 'id': 'orange', 'display': 'Orange' },
    { 'id': 'pink', 'display': 'Pink' }
  ];

  filterJson = {};
  hideFilter: boolean = true;

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
  }

  toogleFilter(key, filter?) {
    if(this.checkFilterExists(key, filter)) {
      delete this.filterJson[key];
    } else if(filter) {
      this.filterJson[key] = filter;
    }
    this.xls.triggerFilter(this.filterJson);
  }

  triggerFilter(key, filter) {
    this.filterJson[key] = filter;
    this.xls.triggerFilter(this.filterJson);
  }

  filterButtonClass(key, filter?) {
    if(this.checkFilterExists(key, filter)) {
      return 'active';
    }
    return '';
  }

  checkFilterExists(key, filter?) {
    let filterKeyExists = this.filterJson && this.filterJson[key];
    if(filterKeyExists) {
      if(filter) {
        return this.filterJson[key].toLowerCase() == filter.toLowerCase();
      }
      return true;
    }
    return false;
  }

}
