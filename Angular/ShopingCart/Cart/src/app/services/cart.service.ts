import { Injectable } from '@angular/core';
import { Product } from '../model/models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    constructor() { }

    private cartItem:Array<Product>=[];
    private items=new BehaviorSubject<Product[]>(this.cartItem);
    items$=this.items.asObservable();

   
    private price=new BehaviorSubject<number>(this.getTotalPrice());
    price$=this.price.asObservable();


    addCart(product:Product){
      //console.log("Product Added");
      this.cartItem.push(product);
      this.items.next(this.cartItem);
      this.price.next(this.getTotalPrice());
    }
  
    removeCart(product:Product){
      const index=this.cartItem.indexOf(product);
      this.cartItem.splice(index,1);
      this.items.next(this.cartItem);
      this.price.next(this.getTotalPrice());
    }

    clearCart(){
      this.cartItem.splice(0, this.cartItem.length);
      this.items.next(this.cartItem);
      this.price.next(this.getTotalPrice());
    }
  
  
    getTotalPrice(){
      return this.cartItem.reduce((total,item)=>total+item.price,0);
    }

}
