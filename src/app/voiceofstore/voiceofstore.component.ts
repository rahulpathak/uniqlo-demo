import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { XlsxDataService } from '../rootServices/xlsx-data.service';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

@Component({
  selector: 'app-voiceofstore',
  templateUrl: './voiceofstore.component.html',
  styleUrls: ['./voiceofstore.component.scss'],
  providers: [XlsxDataService]
})

export class VoiceofstoreComponent implements OnInit {

  subscription: Subscription[] = [];
  @ViewChild('myTable') table: DatatableComponent;

  displayedColumns: any;

  rows: any = [];
  count = 0;
  offset = 0;
  limit = 10;
  externalPaging = true;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  improvements = [];
  nonPurchase = [];
  withoutfuture = [];
  newsuggestion = [];

  country = [
    {'id': 'usa', 'display': 'USA'},
    {'id': 'japna', 'display': 'Japan'},
    // {'id': 'india', 'display': 'India'},
    // {'id': 'malaysia', 'display': 'Malaysia'},
    // {'id': 'russia', 'display': 'Russia'},
    // {'id': 'singapore', 'display': 'Singapore'},
    // {'id': 'unitedkingdom', 'display': 'United Kingdom'}
  ];

  category = [
    {'id': 'tops', 'display': 'Tops'},
    {'id': 'outerwear', 'display': 'Outewear'},
    {'id': 'bottoms', 'display': 'Bottoms'},
    {'id': 'activewear', 'display': 'Activewear'},
    {'id': 'dnj', 'display': 'Dressess and Jumpsuits'},
    {'id': 'accandshoes', 'display': 'Accesspries and Shoes'}
  ];

  sub_category = [
    {'id': 'jeans', 'display': 'Jeans'},
    {'id': 'tshirts', 'display': 'T-Shirts'},
    {'id': 'dshirt', 'display': 'Dress Shirt'},
    {'id': 'shirtandblouse', 'display': 'Shirts and Blouses'},
    {'id': 'shorts', 'display': 'Shorts'},
    {'id': 'pants', 'display': 'Pants'},
    {'id': 'jakets', 'display': 'Jackets'},
    {'id': 'pshirt', 'display': 'Polo Shirt'},
    {'id': 'pullovers', 'display': 'Pullovers'}
  ];

  age_cat = [
    {'id': 'age1', 'display': '12-18'},
    {'id': 'age2', 'display': '18-28'},
    {'id': 'age3', 'display': '28-40'},
    {'id': 'age4', 'display': '40-50'},
    {'id': 'age5', 'display': '50-70'},
    {'id': 'age6', 'display': '70-90'}
  ];

  size_cat = [
    {'id': 'xxsmall', 'display': 'XXS'},
    {'id': 'xsmall', 'display': 'XS'},
    {'id': 'small', 'display': 'S'},
    {'id': 'medium', 'display': 'M'},
    {'id': 'learge', 'display': 'L'},
    {'id': 'xlearge', 'display': 'XL'},
    {'id': 'xxlearge', 'display': 'XXL'}
  ];

  fabric_cat = [
    {'id': 'cotton', 'display': 'Cotton'},
    {'id': 'jersey', 'display': 'Jersey'},
    {'id': 'linen', 'display': 'Linen'},
    {'id': 'silk', 'display': 'Silk'},
    {'id': 'canvas', 'display': 'Canvas'},
    {'id': 'lycra', 'display': 'Lycra'},
    {'id': 'lace', 'display': 'Lace'},
    {'id': 'velvet', 'display': 'Velvet'}
  ];

  color_cat = [
    {'id': 'black', 'display': 'Black'},
    {'id': 'blue', 'display': 'Blue'},
    {'id': 'brown', 'display': 'Brown'},
    {'id': 'white', 'display': 'White'},
    {'id': 'yellow', 'display': 'Yellow'},
    {'id': 'orange', 'display': 'Orange'},
    {'id': 'pink', 'display': 'Pink'}
  ];

  suffleData = [];
  filterJson: any = {};

  constructor(private xls: XlsxDataService) {}

  ngOnInit() {
    this.xls.getXlsxData('assets/uniqlodemodata.xlsx').subscribe(data => {
      this.xls.setRawData(data);
    });
    this.xls.getFilteredData().subscribe(data => {
      this.rows = data;
      this.suffleData = [...this.rows];

      const shuffled = this.suffleData.sort(function() {return .5 - Math.random()});

      this.improvements = data.sort((a,b) => b.improvements.success - a.improvements.success).slice(0, 5);
      this.nonPurchase = data.sort((a,b) => b.non_purchase.success - a.non_purchase.success).slice(0, 5);
      this.withoutfuture = data.sort((a,b) => b.without_future.success - a.without_future.success).slice(0, 5);
      this.newsuggestion = data.sort((a,b) => b.new_suggestions.success - a.new_suggestions.success).slice(0, 5);
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

  filterButtonClass(key, filter?) {
    if(this.checkFilterExists(key, filter)) {
      return 'btn-primary';
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
