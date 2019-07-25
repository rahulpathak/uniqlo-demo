import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VoiceofstoreComponent } from './voiceofstore/voiceofstore.component';
import { VoiceofcustomerComponent } from './voiceofcustomer/voiceofcustomer.component';
import { FullPageComponent } from './layout/components/full-page/full-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { 
    path: '', 
    component: FullPageComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'vos', component: VoiceofstoreComponent },
      { path: 'voc', component: VoiceofcustomerComponent },
      { 
        path: 'product-view/:id', 
        loadChildren: './product-view/product-view.module#ProductViewModule',
        data: {
          hideFilter: true
        }
      }
    ]
  }  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
