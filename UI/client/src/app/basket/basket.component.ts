import { Component, OnInit } from '@angular/core';
import { BasketItem } from '../models/basket';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(public basketService: BasketService) { }

  ngOnInit(): void {
  }

  incrementQuantity(item: BasketItem)
  {
      this.basketService.addItemToBasket(item);
  }

  removeItem(event : {id: number, quantity: number})
  {
      this.basketService.removeItemFromBasket(event.id, event.quantity);
  }
}
