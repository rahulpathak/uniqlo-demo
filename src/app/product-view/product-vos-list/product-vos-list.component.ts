import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-vos-list',
  templateUrl: './product-vos-list.component.html',
  styleUrls: ['./product-vos-list.component.css']
})
export class ProductVosListComponent implements OnInit {
  @Input('items') items;

  constructor() { }

  ngOnInit() {
  }

}
