import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderComponent } from './order.component';

const routes: Routes = [
  {path: "", component: OrderComponent},
  {path: ":id", component: OrderDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
