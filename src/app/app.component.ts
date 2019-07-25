import { Component, OnInit } from '@angular/core';
import { XlsxDataService } from './rootServices/xlsx-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    loading: boolean;
   
    constructor(
        private xls: XlsxDataService
    ) { }

    ngOnInit() {
        this.loading = true;
        this.xls.getXlsxData('assets/uniqlodemodata.xlsx').subscribe(data => {
            this.xls.setRawData(data);
            this.loading = false;
        });
    }
}
