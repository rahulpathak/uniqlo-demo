import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XlsxDataService } from '../rootServices/xlsx-data.service';
import { ProgressSuccessFailureComponent } from './progress-success-failure/progress-success-failure.component';

@NgModule({
  declarations: [ProgressSuccessFailureComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressSuccessFailureComponent
  ],
  providers: [
    XlsxDataService
  ]
})
export class SharedModule { }
