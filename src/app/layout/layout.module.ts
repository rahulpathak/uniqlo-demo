import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FullPageComponent } from './components/full-page/full-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { FilterBoxComponent } from './filter-box/filter-box.component';

@NgModule({
  declarations: [
    FullPageComponent, 
    HeaderComponent,
    SidenavComponent,
    FilterBoxComponent
  ],
  imports: [
    CommonModule, RouterModule, BsDropdownModule
  ],
  exports: [
    FullPageComponent
  ]
})
export class LayoutModule { }
