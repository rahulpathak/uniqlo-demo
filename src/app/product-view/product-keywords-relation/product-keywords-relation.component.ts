import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-keywords-relation',
  templateUrl: './product-keywords-relation.component.html',
  styleUrls: ['./product-keywords-relation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductKeywordsRelationComponent implements OnInit {
  keywords;
  constructor() { }

  ngOnInit() {
    this.keywords = [{  
      "item": "Pocket",  
      "keywords": [{
        "keyword": "Cigarette",
        "count": 25
      }, {
        "keyword": "Work/Business",
        "count": 25
      }, {
        "keyword": "Pen/Pencil",
        "count": 18
      }, {
        "keyword": "Mobile",
        "count": 10
      }]
    }, {
      "item": "Collar",
      "keywords": [{
        "keyword": "Turtle Neck",
        "count": 15
      }, {
        "keyword": "V Neck",
        "count": 3
      }]
    }];
  }

}
