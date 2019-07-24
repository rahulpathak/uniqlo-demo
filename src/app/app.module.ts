import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Ng5SliderModule } from 'ng5-slider';
import { MaterialDesignModule } from './material-design.module';
import { VoiceofstoreComponent } from './voiceofstore/voiceofstore.component';
import { VoiceofcustomerComponent } from './voiceofcustomer/voiceofcustomer.component';
import { SharedModule } from './shared/shared.module';
import { AccordionModule } from 'ngx-bootstrap';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VoiceofstoreComponent,
    VoiceofcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    Ng5SliderModule,
    MaterialDesignModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
