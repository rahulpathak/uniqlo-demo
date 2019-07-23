import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-gradient-bar',
  templateUrl: './color-gradient-bar.component.html',
  styleUrls: ['./color-gradient-bar.component.scss']
})
export class ColorGradientBarComponent implements OnInit {
  @Input('height') height: number;
  colors;

  constructor() { }

  ngOnInit() {
    this.colors = ['red', 'salmon', 'pink', 'green', 'blue', 'yellow', 'red', 'salmon', 'pink', 'green', 'blue', 'yellow'];
  }

}
