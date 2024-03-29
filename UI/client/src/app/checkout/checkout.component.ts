import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account/account.service';
import { BasketService } from '../basket/basket.service';
import { Address } from '../models/address';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  address?: Address;
  constructor(private fb: FormBuilder, private accountService: AccountService, 
    private basketService: BasketService) { }

  ngOnInit(): void {
    this.getAddressFormValues();
    this.getDeliveryMethodValue();
  }

  checkoutForm = this.fb.group({
    addressForm: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', Validators.required],
    }),
    deliveryForm: this.fb.group({
      deliveryMethod: ['', Validators.required]
    }),
    paymentForm: this.fb.group({
      nameOnCard: ['', Validators.required]
    })
  })

  getAddressFormValues()
  {
    this.accountService.getUserAddress().subscribe({
      next: address => {
        this.address = address;
        address && this.checkoutForm.get('addressForm')?.patchValue(address)
      }
    })
  }

  getDeliveryMethodValue()
  {
      const basket = this.basketService.getCurrentBasketValue();
      if(basket  && basket.deliveryMethodId)
      {
          this.checkoutForm.get("deliveryForm")?.get("deliveryMethod")
            ?.patchValue(basket.deliveryMethodId.toString());
      }
  }
 
}
