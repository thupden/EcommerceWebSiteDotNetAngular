import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {
  @Input() product?: Product;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }

  addItemToBasket()
  {
    if(this.product)
    {
      this.basketService.addItemToBasket(this.product);
    }
       
  }
}
