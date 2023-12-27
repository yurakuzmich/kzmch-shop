import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [
    OrdersListComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
  ]
})
export class CartModule { }
