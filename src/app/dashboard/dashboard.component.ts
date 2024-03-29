import { Component, OnInit, AfterViewInit } from '@angular/core';
import { XlsxDataService } from '../rootServices/xlsx-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toprating = [];
  lowrating = [];
  VOSboxes = [];

  constructor(
    private xls: XlsxDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.VOSboxes = [{
      // title: 'Improvements',
      title: '改善点',
      param: 'improvements'
    },
    {
      // title: 'Non-Purchase(Tried)',
      title: '非購入（試用）',
      param: 'non_purchase'
    },{
      // title: 'Without Future',
      title: '未来なし',
      param: 'without_future'
    },{
      // title: 'New Suggestion',
      title: '新しい提案',
      param: 'new_suggestions'
    }];
    
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
}
