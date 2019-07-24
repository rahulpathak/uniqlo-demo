import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FullPageComponent } from './components/full-page/full-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    FullPageComponent, 
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    FullPageComponent
  ]
})
export class LayoutModule { }
