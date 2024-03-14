import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
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
import { PagerComponent } from "../shared/component/pager/pager.component";

@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css',
    imports: [NgFor, NgIf, ShopItemsComponent, ShopModule, PaginationModule, SharedModule, PagerComponent]
})
export class ShopComponent implements OnInit {
  @ViewChild('search') searchKey:ElementRef;
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
    this.shopParams.pageNumber=1
    this.getProduct();

  }

  onSortSelect(event:Event){
    let sortValue = (event.target as HTMLInputElement).value;
    this.shopParams.sort=sortValue;
    this.getProduct();
  }

  onPageChanged(event:any){
    if(this.shopParams.pageNumber !== event){
      this.shopParams.pageNumber = event;
      this.getProduct();
    }
  }

  onSearch(){
    this.shopParams.searhKey = this.searchKey.nativeElement.value
    this.getProduct();
  }
  onReset(){
    this.searchKey.nativeElement.value=''
    this.shopParams  = new ShopParams()
    this.getProduct()
  }
  
}