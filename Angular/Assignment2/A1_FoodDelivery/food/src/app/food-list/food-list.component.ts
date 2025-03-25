import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';

interface FoodItem {
  id: number;
  name: string;
  price: number;
};

@Component({
  selector: 'app-food-list',
  imports: [CommonModule],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})

export class FoodListComponent {
  foodItems: FoodItem[] = [
    { id: 1, name: 'Pizza', price: 9.99 },
    { id: 2, name: 'Burger', price: 5.99 },
    { id: 3, name: 'Pasta', price: 7.99 },
    { id: 4, name: 'Salad', price: 4.99 },
    { id: 5, name: 'Idali', price: 12.99 }];

  @Output() onAddingCart = new EventEmitter<void>();

  constructor(private service: CartService) {
  }

  


  addToCart(item: FoodItem) {
    this.service.addToCart(item);
    this.onAddingCart.emit();
    this.service.onAddCart.next(true);
  }
}
