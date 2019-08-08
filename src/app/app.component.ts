import { Component, OnInit } from '@angular/core';
import { XlsxDataService } from './rootServices/xlsx-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    loading: boolean;

    loadingConfig = {
        primaryColour: '#dd0031', secondaryColour: '#006ddd', tertiaryColour: '#dd0031', 
        backdropBorderRadius: '3px', backdropBackgroundColour: 'rgba(0,0,0,0.6)'
    };

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
