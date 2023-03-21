import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreErrorComponent } from './core/core-error/core-error.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent, data: {breadcrumb: 'Home'}},
  {path: "core-error", component: CoreErrorComponent},
  {path: "page-not-found", component: PageNotFoundComponent},
  {path: "server-error", component: ServerErrorComponent},
  {path:"shop", loadChildren: () => import("./shop/shop.module").then(m => m.ShopModule)},
  {path:"basket", loadChildren: () => import("./basket/basket.module").then(m => m.BasketModule)},
  {path:"checkout", loadChildren: () => import("./checkout/checkout.module").then(m => m.CheckoutModule)},
  {path: "**", redirectTo:"", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
