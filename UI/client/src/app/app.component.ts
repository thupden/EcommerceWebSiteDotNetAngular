import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { Pagination } from './models/pagination';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: Product[] = [];

  constructor(private basketService: BasketService){}
  ngOnInit(): void {
  //  this.http.get<Pagination<Product[]>>("https://localhost:5001/api/products?pageSize=50").subscribe({
  //    next: response => this.products = response.data,
  //    error: error => console.log(error),
  //    complete: () => {
  //      console.log("Request completed");
  //      console.log("extra statement");
  //    }
  //  });
  const basketId = localStorage.getItem("basket_id");
  if(basketId)
  {
    console.log(basketId);
    this.basketService.getBasket(basketId);
  }
     
  }
}
