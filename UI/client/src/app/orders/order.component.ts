import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: any;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrdersForUser();
  }

  getOrdersForUser()
  {
      this.orderService.getOrdersForUser().subscribe({
        next : order => this.orders = order
      })
  }

}
