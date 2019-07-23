import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XlsxDataService } from '../rootServices/xlsx-data.service';
import { ProgressSuccessFailureComponent } from './progress-success-failure/progress-success-failure.component';
import { VoiceStoreTableComponent } from './voice-store-table/voice-store-table.component';
import { ColorGradientBarComponent } from './color-gradient-bar/color-gradient-bar.component';

@NgModule({
  declarations: [ProgressSuccessFailureComponent, VoiceStoreTableComponent, ColorGradientBarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressSuccessFailureComponent, VoiceStoreTableComponent, ColorGradientBarComponent
  ],
  providers: [
    
  ]
})
export class SharedModule { }
