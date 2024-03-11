import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./core/nav-bar/nav-bar.component";
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { IPagniation } from './shared/Models/Pagination';
import { IProducts } from './shared/Models/Product';
import { ShopService } from './shop/service/shop.service';
import { ShopComponent } from './shop/shop.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent,HttpClientModule,NgFor,ShopComponent]
})
export class AppComponent implements OnInit{
  constructor(private http:HttpClient,private shop : ShopService) {
  }
  ngOnInit(): void {
  }

}
