import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-country-stats',
  templateUrl: './product-country-stats.component.html',
  styleUrls: ['./product-country-stats.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCountryStatsComponent implements OnInit {
  country_stats;
  constructor() { }

  ngOnInit() {
    this.country_stats =  [

      {
  
        "country": "Japan",
        'code': 'jp',
  
        "voc": [
  
          {
  
            "comment": "I would like to have a pocket",
  
            "count": 28
  
          },
  
          {
  
            "comment": "For office use, it will be helpful to have a pocket",
  
            "count": 48
  
          },
  
          {
  
            "comment": "A pocket will help me keep my pen and pencil",
  
            "count": 20
  
          }
  
        ],
  
        "vos": [
  
          {
  
            "comment": "Comfortable, easy to wear and easy to wash. Love it",
  
            "count": 28
  
          },
  
          {
  
            "comment": "Collar could have been better",
  
            "count": 48
  
          }
  
        ],
  
        "market_information": {
  
          "positive": 67,
  
          "negative": 33
  
        }
  
      }, 

      {
  
        "country": "USA",
        "code": "us",
  
        "voc": [
  
          {
  
            "comment": "I would like to have a pocket",
  
            "count": 28
  
          },
  
          {
  
            "comment": "For office use, it will be helpful to have a pocket",
  
            "count": 48
  
          },
  
          {
  
            "comment": "A pocket will help me keep my pen and pencil",
  
            "count": 20
  
          }
  
        ],
  
        "vos": [
  
          {
  
            "comment": "Comfortable, easy to wear and easy to wash. Love it",
  
            "count": 28
  
          },
  
          {
  
            "comment": "Collar could have been better",
  
            "count": 48
  
          }
  
        ],
  
        "market_information": {
  
          "positive": 67,
  
          "negative": 33
  
        }
  
      }
  
    ];

    this.country_stats.map(x => {x.checked = true; return x;})
  }

  clickCountrySelection(stats, event) {
    event.stopPropagation();
    stats.checked = !stats.checked;
    console.log(this.country_stats);
  }

}
