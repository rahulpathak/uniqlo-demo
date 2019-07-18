import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  value: number = 5;

  country = [
    {'id': 'IN', 'display': 'India'},
    {'id': 'JP', 'display': 'Japan'}
  ];

  constructor() { }

  ngOnInit() {


  }
  

  changeCountry(id){
    console.log(id);
  }



}
