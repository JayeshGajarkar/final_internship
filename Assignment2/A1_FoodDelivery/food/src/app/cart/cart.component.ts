import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from '../food-list/food-list.component';

interface FoodItem {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-cart',
  imports: [CommonModule,FoodListComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartItem: FoodItem[] = [];
  @Input() totalPriceInCart:number=0;
  totalPrice: number = 0;
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItem = this.cartService.getCartItems();
    // this.totalPrice = this.cartService.getTotalPrice();

    this.cartService.onAddCart.subscribe(res => {
      this.getPrice();
    })
  }

  removeFromCart(item: FoodItem): void {
    this.cartService.removeFromCart(item);
    this.cartItem = this.cartService.getCartItems();
    this.getPrice();
  }

  getPrice(){
    this.totalPrice=this.cartService.getTotalPrice();
    this.totalPriceInCart=this.cartService.getTotalPrice();
  }
}