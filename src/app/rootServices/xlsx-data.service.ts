import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, forkJoin, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XlsxDataService {
  private rawData: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  private filter$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }

  getXlsxData(url: string) {
    return this.http.get(url, {responseType: 'arraybuffer'})
            .pipe(map(data => this.xlsxToJson(data)));
  }

  setRawData(data: Array<any>) {
    this.rawData.next(data);
  }

  getRawData(): Observable<Array<any>> {
    return this.rawData.asObservable();
  }

  triggerFilter(filterJson) {
    this.filter$.next(filterJson);
  }

  getFilterJson(): Observable<any> {
    return this.filter$.asObservable();
  }

  getFilteredData(): Observable<any> {
    return combineLatest(this.getRawData(), this.getFilterJson()).pipe(
      map(([rawData, filterJson]) => this.doFilterData(rawData, filterJson))
    );
  }

  doFilterData(rawData, filterJson) {
    return rawData.filter(data => {
      for(let key in filterJson) {
        if (data[key] === undefined || data[key] != filterJson[key])
          return false;
      }
      return true;
    });
  }

  xlsxToJson(xData: ArrayBuffer): Array<any> {
    const data = new Uint8Array(xData);
    const arr = [];
    for (let j = 0; j !== data.length; ++j) {
        arr[j] = String.fromCharCode(data[j]);
    }
    const bstr = arr.join('');
    const workbook = XLSX.read(bstr, { type: 'binary' });
    const first_sheet_name = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[first_sheet_name];
    return XLSX.utils.sheet_to_json(worksheet, { raw: true });
  }
}
