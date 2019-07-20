import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Ng5SliderModule } from 'ng5-slider';
import { MaterialDesignModule } from './material-design.module';
import { VoiceofstoreComponent } from './voiceofstore/voiceofstore.component';
import { VoiceofcustomerComponent } from './voiceofcustomer/voiceofcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    VoiceofstoreComponent,
    VoiceofcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
