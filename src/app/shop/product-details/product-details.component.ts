import { Component, OnInit } from '@angular/core';
import { ShopService } from '../service/shop.service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgIf,CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
productData:any;

ngOnInit(){
  this.loadProduct();
}
constructor(private shopService:ShopService,private route:ActivatedRoute) {
  
}

  loadProduct(){
    this.shopService.getProductById(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(data=>{
      if(data){
        this.productData = data;
      }
    })
  }
}
