import { Component, Input } from '@angular/core';
import { IProducts } from '../../shared/Models/Product';

@Component({
  selector: 'app-shop-items',
  standalone: true,
  imports: [],
  templateUrl: './shop-items.component.html',
  styleUrl: './shop-items.component.css'
})
export class ShopItemsComponent {
@Input() product:IProducts
constructor() {
    
}
}
