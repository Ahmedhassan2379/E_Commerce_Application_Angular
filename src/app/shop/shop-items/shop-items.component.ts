import { Component, Input } from '@angular/core';
import { IProducts } from '../../shared/Models/Product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop-items',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './shop-items.component.html',
  styleUrl: './shop-items.component.css'
})
export class ShopItemsComponent {
@Input() product:IProducts
constructor() {
    
}
}
