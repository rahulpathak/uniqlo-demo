import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { XlsxDataService } from 'src/app/rootServices/xlsx-data.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voiceofstore',
  templateUrl: './voiceofstore.component.html',
  styleUrls: ['./voiceofstore.component.scss']
})

export class VoiceofstoreComponent implements OnInit, AfterViewChecked {

  private currentComponentWidth;

  @ViewChild('myTable') table: DatatableComponent;
  @ViewChild('tableWrapper') tableWrapper;

  displayedColumns: any;

  rows: any = [];
  count = 0;
  offset = 0;
  limit = 10;
  externalPaging = true;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  VOSboxes = [];

  constructor(
    private xls: XlsxDataService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.VOSboxes = [{
      title: 'Improvements',
      param: 'improvements'
    },
    {
      title: 'Non-Purchase(Tried)',
      param: 'non_purchase'
    }, {
      title: 'Without Future',
      param: 'without_future'
    }, {
      title: 'New Suggestions',
      param: 'new_suggestions'
    }];
    
    this.xls.getFilteredData().subscribe(data => {
      this.rows = data;
    });
  }

  ngAfterViewChecked() {
    // Check if the table size has changed,
    if (this.table && this.table.recalculate && (this.tableWrapper.nativeElement.clientWidth !== this.currentComponentWidth)) {
      this.currentComponentWidth = this.tableWrapper.nativeElement.clientWidth;
      this.table.recalculate();
      this.changeDetectorRef.detectChanges();
    }
  }

  selectProduct(event) {
    if (event.type === 'click') {
      this.router.navigate(['/', 'product-view', event.row.p_id]);
    }
  }
}
