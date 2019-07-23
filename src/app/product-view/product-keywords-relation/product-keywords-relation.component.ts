import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-product-keywords-relation',
  templateUrl: './product-keywords-relation.component.html',
  styleUrls: ['./product-keywords-relation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductKeywordsRelationComponent implements OnInit {
  @Input('keywords') keywords;
  constructor() { }

  ngOnInit() {
  }

}
