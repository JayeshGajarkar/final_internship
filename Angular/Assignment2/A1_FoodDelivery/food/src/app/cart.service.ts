import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface FoodItem {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})



export class CartService {
  price = 0;
  onAddCart = new Subject<boolean>();

  constructor() { }

  cartItems: FoodItem[] = [];


  addToCart(item: FoodItem): void {
    //console.log("Item pushed");
    this.cartItems.push(item);
    //this.price += item.price;
  }

  removeFromCart(item: FoodItem): void {
    this.cartItems = this.cartItems.filter(ele => ele !== item);
    //this.cartItems.push({id:10,name:"JAYESH",price:0});
  }

  getCartItems(): FoodItem[] {
    return this.cartItems;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
    //return this.price;
  }

}
