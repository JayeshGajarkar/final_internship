import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: false,
  
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  productId:string;

  constructor(private route:ActivatedRoute){}
  
  ngOnInit(){
    this.route.paramMap.subscribe(param=>{
      this.productId=param.get('id');
    });
  }
}
