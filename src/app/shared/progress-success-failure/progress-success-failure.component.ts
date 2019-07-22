import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-success-failure',
  template: `
  <div class="progress">
    <div class="progress-bar progress-cus" role="progressbar" [style.width.%]="successWidth">
      {{ success }}
    </div>
    <div class="progress-bar progress-red" role="progressbar" [style.width.%]="failureWidth">
      {{ failure }}
    </div>
  </div>
  `,
  styleUrls: ['progress-success-failure.component.css']
})
export class ProgressSuccessFailureComponent implements OnInit {
  @Input('success') success: any;
  @Input('failure') failure: any;
  successWidth: number;
  failureWidth: number;

  constructor() { }

  ngOnInit() {
    let total = parseInt(this.success) + parseInt(this.failure);
    this.successWidth = (parseInt(this.success) / total) * 100;
    this.failureWidth = (parseInt(this.failure) / total) * 100;
  }

}
