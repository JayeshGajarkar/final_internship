import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FoodListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'food';
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }
  
  getPrice() {
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
