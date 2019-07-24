import { Component, OnInit, AfterViewInit } from '@angular/core';
import { XlsxDataService } from '../rootServices/xlsx-data.service';
import { Options } from 'ng5-slider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [XlsxDataService]
})
export class DashboardComponent implements OnInit, AfterViewInit {

  value = 50;

  headerHeading = 'rahul'

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

  improvements = [];
  nonPurchase = [];
  withoutfuture = [];
  newsuggestion = [];
  toprating = [];
  lowrating = [];
  VOSboxes = [];
  filterJson = {};

  constructor(
    private xls: XlsxDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.VOSboxes = [{
      title: 'Improvements',
      param: 'improvements'
    },
    {
      title: 'Non-Purchase(Tried)',
      param: 'non_purchase'
    },{
      title: 'Without Future',
      param: 'without_future'
    },{
      title: 'New Suggestion',
      param: 'new_suggestions'
    }];
  }

  ngAfterViewInit() {
    this.xls.getXlsxData('assets/uniqlodemodata.xlsx').subscribe(data => {
      this.xls.setRawData(data);
    });

    this.xls.getFilteredData().subscribe(data => {
      const sortByRating = data.sort((a,b) => b.evaluation - a.evaluation);
      this.toprating = sortByRating.slice(0, 10);
      this.lowrating = sortByRating.reverse().slice(0, 10);
    });
  }

  goToProductView(product) {
    this.router.navigate(['/', 'product-view', product.p_id]);
  }

  displayTwoDigitsDecimal(number) {
    return parseFloat(number).toFixed(2);
  }

  sumComments(row) {
    return parseInt(row.comments[0]) + parseInt(row.comments[1]);
  }

  toogleFilter(key, filter?) {
    if(this.checkFilterExists(key, filter)) {
      delete this.filterJson[key];
    } else if(filter) {
      this.filterJson[key] = filter;
    }
    this.xls.triggerFilter(this.filterJson);
  }

  filterButtonClass(key, filter?) {
    if(this.checkFilterExists(key, filter)) {
      return 'btn-active';
    }
    return 'btn-default';
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
