import { Injectable } from '@angular/core';
import { Product } from '../model/models';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

    private produtList:Array<Product>=[
      { id: 1, name: 'Product 1', imgUrl: 'https://via.placeholder.com/150', price: 100, rating: 4, description: 'Description for product 1' },
      { id: 2, name: 'Product 2', imgUrl: 'https://via.placeholder.com/150', price: 200, rating: 5, description: 'Description for product 2' },
      { id: 3, name: 'Product 3', imgUrl: 'https://via.placeholder.com/150', price: 150, rating: 3, description: 'Description for product 3' },
      { id: 4, name: 'Product 4', imgUrl: 'https://via.placeholder.com/150', price: 250, rating: 4.5, description: 'Description for product 4' },
      { id: 5, name: 'Product 5', imgUrl: 'https://via.placeholder.com/150', price: 300, rating: 4, description: 'Description for product 5' }
    ];

  
    private items=new BehaviorSubject<Product[]>(this.produtList);
    items$=this.items.asObservable();
  
  
    // addProduct(product:Product){
    //   //console.log("Product Added");
    //   this.produtList.push(product);
    //   this.items.next(this.produtList);
    // }
  
    // removeProduct(product:Product){
    //   const index=this.produtList.indexOf(product);
    //   this.produtList.splice(index,1);
    //   this.items.next(this.produtList);
    // }

}

