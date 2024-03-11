import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagniation } from '../../shared/Models/Pagination';
import { IProducts } from '../../shared/Models/Product';
import { ICategory } from '../../shared/Models/category';
import { map } from 'rxjs';
import { response } from 'express';
import { ShopParams } from '../../shared/Models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  //baseUrl="https://localhost:44368/api/";
  baseUrl="https://localhost:7112/api/";
  products:IProducts[]=[];

  constructor(private http:HttpClient) { }

  getProduct(shopParams:ShopParams){
    let params = new HttpParams();
    if(shopParams.categoryId !=0){
     params = params.append('categoryId',shopParams.categoryId.toString());
    }
      params = params.append('sort',shopParams.sort);    
    params=params.append('pageNumber',shopParams.pageNumber.toString())
    params=params.append('pageSize',shopParams.pageSize.toString())
    return this.http.get<IPagniation>(this.baseUrl+"Product/get-products",{observe:'response',params})
    .pipe(map(res=>{
      return res.body;
    }))
   }


   getCategory(){
    return this.http.get<ICategory[]>(this.baseUrl+"Category/allcategory")
   }
}
