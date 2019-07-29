import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterEvent, NavigationEnd } from '@angular/router';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { XlsxDataService } from 'src/app/rootServices/xlsx-data.service';

@Component({
  selector: 'app-product-vos-page',
  templateUrl: './product-vos-page.component.html',
  styleUrls: ['./product-vos-page.component.scss']
})
export class ProductVosPageComponent implements OnInit {
  title: string = "";
  product;
  country: string = "";

  constructor(
    private xls: XlsxDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
    
    this.router.events.pipe(
      filter((e: RouterEvent) => e instanceof NavigationEnd)
    ).subscribe((e:RouterEvent) => {
      this.title = this.route.snapshot.data.hideFilter;
    });

    combineLatest(this.xls.getRawData(), this.route.paramMap).pipe(
      map(([products, param]) => {
        if(param && param.get("country")) {
          this.country = param.get('country');
        }
        if(param && products.length > 0 && param.get("id")) {
          const productId = param.get("id");
          return products.find(x => x.p_id == productId);
        } else {
          return {};
        }
      }),
      map(x => this.xls.convertDetailsJson(x))
    ).subscribe(product => this.product = product);
  }

  getCountryImageName(country) {
    return 'assets/img/' + country.toLowerCase().replace(" ", "-") + '.png';
  }

}
