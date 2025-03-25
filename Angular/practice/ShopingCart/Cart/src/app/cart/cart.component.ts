import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../model/models';


@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {
  constructor(private service:CartService){}
  cartList:Array<Product>=[];
  totalPrice:number=0;
  
  ngOnInit(){
    this.service.items$.subscribe((items)=>{
      this.cartList=items;
    })
    
    this.service.price$.subscribe((price)=>{
      this.totalPrice=price;
    })
  }

  removeCart(item:Product){
    this.service.removeCart(item);
  }

  cleaCart(){
    this.service.clearCart();
  }
}

