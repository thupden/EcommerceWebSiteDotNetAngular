import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/basket/basket.service';
import { Address } from 'src/app/models/address';
import { Basket } from 'src/app/models/basket';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit {
  @Input() checkoutForm? : FormGroup
  
  constructor(private basketService: BasketService, 
        private checkoutService: CheckoutService, 
        private toastr: ToastrService,
        private router: Router) { }

  ngOnInit(): void {
  }

  submitOrder(){
    const basket = this.basketService.getCurrentBasketValue();
    if(!basket) return;

    const orderToCreate = this.getOrderToCreate(basket);
    if(!orderToCreate) return;

    this.checkoutService.createOrder(orderToCreate).subscribe({
      next: order => {
        this.toastr.success("Order created successfully");
        this.basketService.deleteLocalBasket();
        const navigationExtras: NavigationExtras ={state: order};
        this.router.navigate(['checkout/success'], navigationExtras);
      }
    })
  }
  private getOrderToCreate(basket: Basket)
    {
      const deliveryMethodId = this.checkoutForm?.get('deliveryForm')?.get('deliveryMethod')?.value;
      const shipToAddress = this.checkoutForm?.get('addressForm')?.value as Address;
      if(!deliveryMethodId || !shipToAddress) return;

      return {
        basketId: basket.id,
        deliveryMethod: deliveryMethodId,
        shipToAddress: shipToAddress
      }
    }

}
