import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ShopRoutingModule } from './shop-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,SharedModule,ShopRoutingModule
  ]
})
export class ShopModule { }
