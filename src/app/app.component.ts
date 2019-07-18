import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import * as XLSX from 'xlsx';
import ChartDataSource from 'chartjs-plugin-datasource';
import { Key } from 'protractor';
import * as _ from 'lodash';
import { bindCallback } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    LineChart = [];
    BarChart = [];
    PieChart = [];
    url = [];
    datavalue = [];
    jsonData: any = [];
   
    constructor() { }

    ngOnInit() {
        // this.url = ['assets/sample-dataset.xlsx', 'assets/sheet2.xlsx'];

        const urldata = this.filereader('assets/sample-dataset.xlsx', (datalog) => {{
            // Here i am getting datalog data but this data not retunning any value
            console.log(JSON.stringify(datalog));
            return datalog;
        }});
        
        // const urldata1 = this.filereader('assets/sheet2.xlsx', (datalog1) => {{
        //     console.log(JSON.stringify(datalog1));
        //     return datalog1;
        // }});

        // console.log(urldata);

        setTimeout(() => {
            console.log(urldata);
        }, 5000);

    }

    // function to read multiple xlsx file
    filereader(url, callback) {
        const req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.responseType = 'arraybuffer';
        req.onload = () => {
            const data = new Uint8Array(req.response);
            const arr = [];
            for (let j = 0; j !== data.length; ++j) {
                arr[j] = String.fromCharCode(data[j]);
            }
            const bstr = arr.join('');
            const workbook = XLSX.read(bstr, { type: 'binary' });
            const first_sheet_name = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[first_sheet_name];
            this.jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });
            // create callback function to get data form here
            return callback(this.jsonData);
        };
        req.send();
        return req.onload;
    }
}
