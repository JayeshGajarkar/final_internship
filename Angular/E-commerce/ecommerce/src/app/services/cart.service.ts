import { Injectable } from '@angular/core';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartItem:Array<Product>=[];

    addCart(product:Product){
      //console.log("Product Added");
      this.cartItem.push(product);
    }
  
    removeCart(product:Product){
      const index=this.cartItem.indexOf(product);
      this.cartItem.splice(index,1);
    }
  
    getCart(){
      return this.cartItem;
    }
  
    getTotalPrice(){
      return this.cartItem.reduce((total,item)=>total+item.price,0);
    }
}
