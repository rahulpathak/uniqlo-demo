import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-product-country-stats',
  templateUrl: './product-country-stats.component.html',
  styleUrls: ['./product-country-stats.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCountryStatsComponent implements OnInit {
  @Input('product') product;
  openAll: boolean;

  constructor() { }

  ngOnInit() {
    this.openAll = true;
    if(this.product && this.product.details && this.product.details.comments) {
      this.product.details.comments.map(x => {
        x.opened = true;
        x.checked = true;
        return x;
      })
    }
  }

  getCountryImageName(country) {
    return 'assets/img/' + country.toLowerCase().replace(" ", "-") + '.png';
  }

  clickCountrySelection(stats, event) {
    event.stopPropagation();
    stats.checked = !stats.checked;
  }

  toggleAll() {
    this.openAll = !this.openAll;
    if(this.product && this.product.details && this.product.details.comments) {
      this.product.details.comments.map(x => {
        x.opened = this.openAll;
        return x;
      })
    }
  }

  onOpenChangePanel(data, stats) {
    stats.opened = data;
    this.openAll = false;
    this.product.details.comments.forEach(x => x.opened ? this.openAll = true : '');
  }
}
