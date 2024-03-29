import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { XlsxDataService } from 'src/app/rootServices/xlsx-data.service';
import { Router, NavigationEnd, RouterEvent, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BsDropdownDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent implements OnInit {

  country = [
    { 'id': 'japan', 'display': 'Japan' },
    { 'id': 'usa', 'display': 'USA' }
    // { 'id': 'india', 'display': 'India' },
    // { 'id': 'malaysia', 'display': 'Malaysia' },
    // { 'id': 'russia', 'display': 'Russia' },
    // { 'id': 'singapore', 'display': 'Singapore' },
    // { 'id': 'unitedkingdom', 'display': 'United Kingdom' }
  ];

  // category = [
  //   { 'id': 'accandshoes', 'display': 'Accessories and Shoes' },
  //   { 'id': 'activewear', 'display': 'Activewear' },
  //   { 'id': 'bottoms', 'display': 'Bottoms' },
  //   { 'id': 'dnj', 'display': 'Dresses and Jumpsuits' },
  //   { 'id': 'outerwear', 'display': 'Outerwear' },
  //   { 'id': 'tops', 'display': 'Tops' }
  // ];

  // sub_category = [
  //   { 'id': 'dshirts', 'display': 'Dress Shirt' },
  //   { 'id': 'jackets', 'display': 'Jackets' },
  //   { 'id': 'jeans', 'display': 'Jeans' },
  //   { 'id': 'pants', 'display': 'Pants' },
  //   { 'id': 'pshirts', 'display': 'Polo Shirt' },
  //   { 'id': 'pullovers', 'display': 'Pullovers' },
  //   { 'id': 'tshirts', 'display': 'T-Shirts' },
  //   { 'id': 'shirtsandblouses', 'display': 'Shirts and Blouses' },
  //   { 'id': 'shorts', 'display': 'Shorts' }
  // ];

  // fabric_cat = [
  //   { 'id': 'canvas', 'display': 'Canvas' },
  //   { 'id': 'cotton', 'display': 'Cotton' },
  //   { 'id': 'jersey', 'display': 'Jersey' },
  //   { 'id': 'lace', 'display': 'Lace' },
  //   { 'id': 'linen', 'display': 'Linen' },
  //   { 'id': 'lycra', 'display': 'Lycra' },
  //   { 'id': 'silk', 'display': 'Silk' },
  //   { 'id': 'velvet', 'display': 'Velvet' }
  // ];

  // color_cat = [
  //   { 'id': 'black', 'display': 'Black' },
  //   { 'id': 'blue', 'display': 'Blue' },
  //   { 'id': 'brown', 'display': 'Brown' },
  //   { 'id': 'pink', 'display': 'Pink' },
  //   { 'id': 'orange', 'display': 'Orange' },
  //   { 'id': 'white', 'display': 'White' },
  //   { 'id': 'yellow', 'display': 'Yellow' }
  // ];

  category = [
    { 'id': 'accandshoes', 'display': 'アクセサリーと靴' },
    { 'id': 'activewear', 'display': 'アクティブウェア' },
    { 'id': 'bottoms', 'display': 'ボトムス' },
    { 'id': 'dnj', 'display': 'ドレスとジャンプスーツ' },
    { 'id': 'outerwear', 'display': 'アウターウェア' },
    { 'id': 'tops', 'display': 'トップス' }
  ];

  sub_category = [
    { 'id': 'dshirts', 'display': 'ドレスシャツ' },
    { 'id': 'jackets', 'display': 'ジャケット' },
    { 'id': 'jeans', 'display': 'ジーンズ' },
    { 'id': 'pants', 'display': 'パンツ' },
    { 'id': 'pshirts', 'display': 'ポロシャツ' },
    { 'id': 'pullovers', 'display': 'プルオーバー' },
    { 'id': 'tshirts', 'display': 'Tシャツ' },
    { 'id': 'shirtsandblouses', 'display': 'シャツとブラウス' },
    { 'id': 'shorts', 'display': 'ショートパンツ' }
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
    { 'id': 'canvas', 'display': 'キャンバス' },
    { 'id': 'cotton', 'display': 'コットン' },
    { 'id': 'jersey', 'display': 'ジャージー' },
    { 'id': 'lace', 'display': 'レース' },
    { 'id': 'linen', 'display': 'リネン' },
    { 'id': 'lycra', 'display': 'ライクラ' },
    { 'id': 'silk', 'display': 'シルク' },
    { 'id': 'velvet', 'display': 'ベルベット' }
  ];

  color_cat = [
    { 'id': 'black', 'display': 'ブラック' },
    { 'id': 'blue', 'display': '青' },
    { 'id': 'brown', 'display': '褐色' },
    { 'id': 'pink', 'display': 'ピンク' },
    { 'id': 'orange', 'display': 'オレンジ' },
    { 'id': 'white', 'display': '白' },
    { 'id': 'yellow', 'display': '黄' }
  ];

  filterJson = {};
  hideFilter: boolean = true;

  @ViewChildren(BsDropdownDirective, { read: ElementRef }) dropdowns !: QueryList<ElementRef>;

  constructor(
    private xls: XlsxDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.hideFilter = this.route.snapshot.firstChild.data.hideFilter;
    this.router.events.pipe(
      filter((e: RouterEvent) => e instanceof NavigationEnd)
    ).subscribe((e: RouterEvent) => {
      this.hideFilter = this.route.snapshot.firstChild.data.hideFilter;
      this.clearAllFilter();
    });
  }

  isShowDropUp(index) {
    if (!this.dropdowns) return false;
    const dropDown: ElementRef = this.dropdowns.toArray()[index];
    if (!dropDown || !dropDown.nativeElement.classList.contains('open')) return false;
    const rect = dropDown.nativeElement.getBoundingClientRect();
    if (window.innerHeight < (rect.top + 250)) {
      return true;
    }
    return false;
  }

  toogleFilter(key, filter?) {
    if (!this.filterJson[key]) {
      this.filterJson[key] = [];
    }
    if (this.checkFilterExists(key, filter)) {
      this.filterJson[key] = this.filterJson[key].filter(x => x.toLowerCase() != filter.toLowerCase());
    } else if (filter) {
      this.filterJson[key].push(filter);
    }
    this.xls.triggerFilter(this.filterJson);
  }

  clearAllFilter() {
    this.filterJson = {};
    this.xls.triggerFilter(this.filterJson);
  }

  clearFilter(key) {
    this.filterJson[key] = [];
    this.xls.triggerFilter(this.filterJson);
  }

  filterActiveClass(key, filter?) {
    if (this.checkFilterExists(key, filter)) {
      return 'active';
    }
    return '';
  }

  checkFilterExists(key, filter?) {
    let filterKeyExists = this.filterJson && this.filterJson[key] && this.filterJson[key].length > 0;
    if (filterKeyExists) {
      if (filter) {
        return this.filterJson[key].some(x => x.toLowerCase() === filter.toLowerCase());
      }
      return true;
    }
    return false;
  }

}
