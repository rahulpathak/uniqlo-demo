import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-voc-list',
  templateUrl: './product-voc-list.component.html',
  styleUrls: ['./product-voc-list.component.css']
})
export class ProductVocListComponent implements OnInit {
  @Input('items') items;

  constructor() { }

  ngOnInit() {
  }

}
