import { Component, OnInit, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/Observable';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-voiceofstore',
  templateUrl: './voiceofstore.component.html',
  styleUrls: ['./voiceofstore.component.scss']
})

export class VoiceofstoreComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  dataSource;
  displayedColumns: any;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
  ) {

  }

  ngOnInit() {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);

    this.dataSource.sort = this.sort;
    console.log(this.dataSource);
  }

}
