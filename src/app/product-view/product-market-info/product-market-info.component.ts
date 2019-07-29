import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-market-info',
  templateUrl: './product-market-info.component.html',
  styleUrls: ['./product-market-info.component.css']
})
export class ProductMarketInfoComponent implements OnInit {
  @Input('product') product;
  @Input('country') country;
  @Input('item') item;

  constructor() { }

  ngOnInit() {
  }

}
