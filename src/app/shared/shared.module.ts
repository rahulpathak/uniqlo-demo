import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XlsxDataService } from '../rootServices/xlsx-data.service';
import { ProgressSuccessFailureComponent } from './progress-success-failure/progress-success-failure.component';
import { VoiceStoreTableComponent } from './voice-store-table/voice-store-table.component';

@NgModule({
  declarations: [ProgressSuccessFailureComponent, VoiceStoreTableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressSuccessFailureComponent, VoiceStoreTableComponent
  ],
  providers: [
    
  ]
})
export class SharedModule { }
