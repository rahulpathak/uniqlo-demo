import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Ng5SliderModule } from 'ng5-slider';
import { MaterialDesignModule } from './material-design.module';
import { VoiceofstoreComponent } from './voiceofstore/voiceofstore.component';
import { VoiceofcustomerComponent } from './voiceofcustomer/voiceofcustomer.component';
import { from } from 'rxjs';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    VoiceofstoreComponent,
    VoiceofcustomerComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    Ng5SliderModule,
    MaterialDesignModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
