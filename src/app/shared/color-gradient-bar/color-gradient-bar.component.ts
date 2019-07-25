import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-gradient-bar',
  templateUrl: './color-gradient-bar.component.html',
  styleUrls: ['./color-gradient-bar.component.scss']
})
export class ColorGradientBarComponent implements OnInit {
  @Input('height') height: number;
  styles;
  colors: Array<any>;
  total: number;

  constructor() { }

  ngOnInit() {
    this.styles = {
      fontColor: "#222222",
      fontSize: "10px"
    };
    this.colors = [{
      backgroundColor: '#FF0000',
      value: 30
    }, {
      backgroundColor: '#CDCDCD',
      value: 20
    }, {
      backgroundColor: '#48BAE3',
      value: 50
    }];
    this.total = this.colors.map(x => x.value).reduce((x,y) => (x + y));
  }

  percentageWidth(value) {
    return (value / this.total) * 100;
  }

}
