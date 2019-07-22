import { Component, OnInit, AfterViewInit } from '@angular/core';
import { XlsxDataService } from '../rootServices/xlsx-data.service';
import { Options } from 'ng5-slider';

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
    { 'id': 'japna', 'display': 'Japan' },
    { 'id': 'india', 'display': 'India' },
    { 'id': 'malaysia', 'display': 'Malaysia' },
    { 'id': 'russia', 'display': 'Russia' },
    { 'id': 'singapore', 'display': 'Singapore' },
    { 'id': 'unitedkingdom', 'display': 'United Kingdom' }
  ];

  category = [
    { 'id': 'tops', 'display': 'Tops' },
    { 'id': 'outerwear', 'display': 'Outewear' },
    { 'id': 'bottoms', 'display': 'Bottoms' },
    { 'id': 'activewear', 'display': 'Activewear' },
    { 'id': 'dnj', 'display': 'Dressess and Jumpsuits' },
    { 'id': 'accandshoes', 'display': 'Accesspries and Shoes' }
  ];

  sub_category = [
    { 'id': 'jeans', 'display': 'Jeans' },
    { 'id': 'tshirts', 'display': 'T-Shirts' },
    { 'id': 'dshirt', 'display': 'Dress Shirt' },
    { 'id': 'shirtandblouse', 'display': 'Shirts and Blouses' },
    { 'id': 'shorts', 'display': 'Shorts' },
    { 'id': 'pants', 'display': 'Pants' },
    { 'id': 'jakets', 'display': 'Jackets' },
    { 'id': 'pshirt', 'display': 'Polo Shirt' },
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

  constructor(private xls: XlsxDataService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.xls.getXlsxData('assets/uniqlodemodata.xlsx').subscribe(data => {

      const shuffled = data.sort(function() {return .5 - Math.random()});

      this.improvements = shuffled.slice(80, 85);
      this.nonPurchase = shuffled.slice(55, 60);
      this.withoutfuture = shuffled.slice(70, 75);
      this.newsuggestion = shuffled.slice(30, 35);
      this.toprating = shuffled.slice(0, 5);
      this.lowrating = shuffled.slice(10, 15);
    });
  }

  // changeCountry(id) {
  //   console.log(id);
  // }
}
