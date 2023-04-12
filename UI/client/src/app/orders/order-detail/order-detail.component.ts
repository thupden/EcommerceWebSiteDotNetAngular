import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order: any;
  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOrderById();
  }

  getOrderById()
  {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(id);
    if(id)
    {
        this.orderService.getOrderByIdForUser(+id).subscribe({
        next : order => this.order = order
      })
    }
      
  }
}
