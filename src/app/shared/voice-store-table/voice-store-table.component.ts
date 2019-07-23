import { Component, OnInit, Input } from '@angular/core';
import { XlsxDataService } from 'src/app/rootServices/xlsx-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voice-store-table',
  templateUrl: './voice-store-table.component.html',
  styleUrls: ['./voice-store-table.component.css']
})
export class VoiceStoreTableComponent implements OnInit {
  @Input('title') title: string;
  @Input('param') param: string;
  @Input('limit') limit: number;

  rows = [];

  constructor(
    private xls: XlsxDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.xls.getFilteredData().subscribe(data => {
      this.rows = data.sort((a,b) => b[this.param].success - a[this.param].success).slice(0, this.limit);
    });
  }

  goToProductView(product) {
    this.router.navigate(['/', 'product-view', product.p_id]);
  }

  getSuccess(row) {
    return row[this.param].success;
  }

  getFailure(row) {
    return row[this.param].failure;
  }

}
