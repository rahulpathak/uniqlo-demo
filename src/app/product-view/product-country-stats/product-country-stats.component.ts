import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-product-country-stats',
  templateUrl: './product-country-stats.component.html',
  styleUrls: ['./product-country-stats.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCountryStatsComponent implements OnInit {
  @Input('product') product;
  country_stats;
  constructor() { }

  ngOnInit() {
    if(this.product && this.product.details && this.product.details.comments) {
      this.product.details.comments.map(x => {x.checked = true; return x;})
    }
  }

  getCountryImageName(country) {
    return 'assets/img/' + country.toLowerCase().replace(" ", "-") + '.png';
  }

  clickCountrySelection(stats, event) {
    event.stopPropagation();
    stats.checked = !stats.checked;
  }

}
