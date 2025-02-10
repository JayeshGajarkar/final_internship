import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/models';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
    constructor(private cartService:CartService,private productService:ProductService){}
    productList:Array<Product>=[];


    ngOnInit(){
      this.productList=this.productService.getProduct();
    }

    addToCart(item:Product){
      this.cartService.addCart(item);
    }

}
