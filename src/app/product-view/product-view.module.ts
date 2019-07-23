import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductKeywordsRelationComponent } from './product-keywords-relation/product-keywords-relation.component';
import { AccordionModule } from 'ngx-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductCountryStatsComponent } from './product-country-stats/product-country-stats.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [ProductDetailsComponent, ProductKeywordsRelationComponent, ProductCountryStatsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    AccordionModule
  ]
})
export class ProductViewModule { }
