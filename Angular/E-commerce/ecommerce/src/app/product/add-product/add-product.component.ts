import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-add-product',
  standalone: false,
  
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
    
    addProductForm:FormGroup;

    constructor(private service:ProductService,private logInService:LoginService){
      this.addProductForm = new FormGroup({
        id: new FormControl(null, Validators.required),
        name: new FormControl('', Validators.required),
        imgUrl: new FormControl('', Validators.required),
        price: new FormControl(null, [Validators.required, Validators.min(0)]),
        rating: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(5)]),
        description: new FormControl('', Validators.required)
      });
    }

    ngOnInit(){
      this.logInService.changeSubmitStatus(false);
    }

    addProduct() {
      if (this.addProductForm.valid) {
        this.service.addProduct(this.addProductForm.value);
        this.addProductForm.reset();
        this.logInService.changeSubmitStatus(true);
        alert("Product added Sucessfully")
      }
    }
}
