import { Component, OnInit } from '@angular/core';
import { XlsxDataService } from 'src/app/rootServices/xlsx-data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any = {};
  rows
  constructor(
    private xls: XlsxDataService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {    
    this.xls.getXlsxData('assets/uniqlodemodata.xlsx').subscribe(data => {
      this.xls.setRawData(data);
    });
    console.log(this.product);

    combineLatest(this.xls.getRawData(), this.route.paramMap).pipe(
      map(([products, param]) => {
        if(param && products.length > 0 && param.get("id")) {
          const productId = param.get("id");
          return products.find(x => x.p_id == productId);
        } else {
          return {};
        }
      }),
      map(x => this.xls.convertDetailsJson(x))
    ).subscribe(product => {console.log(product);this.product = product;});
  }

}
