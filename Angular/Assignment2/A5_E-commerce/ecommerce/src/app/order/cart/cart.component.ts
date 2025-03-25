import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/models';
import { CartService } from '../../services/cart.service';

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
    this.cartList=this.service.getCart();
    this.totalPrice=this.service.getTotalPrice();
  }

  removeCart(item:Product){
    this.service.removeCart(item);
    this.totalPrice=this.service.getTotalPrice();
  }
}
