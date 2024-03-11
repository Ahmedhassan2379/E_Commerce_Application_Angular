import { Component, OnInit } from '@angular/core';
import { IProducts } from '../shared/Models/Product';
import { IPagniation } from '../shared/Models/Pagination';
import { ShopService } from './service/shop.service';
import { NgFor , NgIf } from '@angular/common';
import { ShopItemsComponent } from './shop-items/shop-items.component';
import { ICategory } from '../shared/Models/category';
import { ShopModule } from './shop.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ShopParams } from '../shared/Models/shopParams';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor,NgIf, ShopItemsComponent,ShopModule,PaginationModule,SharedModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  products: IProducts[] = [];
  categories: ICategory[] = [];
  sortOptions=[
    {name:'Name',value:'Name'},
    {name:'Price Asending',value:'PriceAsending'},
    {name:'Price Discending',value:'PriceDescinding'}
  ]
 shopParams = new ShopParams();
 totalCount:number;
  constructor(private shop: ShopService) {
  }
  ngOnInit(): void {
    this.getProduct();
    this. getCategory();
  }
  getProduct() {
    this.shop.getProduct(this.shopParams).subscribe(data => {
      this.products = data.items;
      this.totalCount=data.count
      this.shopParams.pageNumber=data.pageNumber
      this.shopParams.pageSize = data.pageSize
      console.log("data", data)
    })
  }

  getCategory(){
    this.shop.getCategory().subscribe(data=>{
      this.categories=[{id:0,name:'All',description:''},...data]
      console.log("dd",this.categories)
    })
  }

  onCategorySelected(categoryId:number){
    this.shopParams.categoryId = categoryId
    this.getProduct();

  }

  onSortSelect(event:Event){
    let sortValue = (event.target as HTMLInputElement).value;
    this.shopParams.sort=sortValue;
    this.getProduct();
  }

  onPageChanged(event:any){
    this.shopParams.pageNumber = event;
    this.getProduct();
  }
}