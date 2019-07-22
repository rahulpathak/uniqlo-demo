import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageComponent } from './components/full-page/full-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [FullPageComponent, SidebarComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
