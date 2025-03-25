import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})


export class RegistrationComponent {
  
  constructor(private service:AuthService){}

  myForm:FormGroup=new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  })

  ngOnInit(){
    this.service.changeSubmitStatus(false);
  }


  onSubmit(){
    console.log(this.myForm.value);
    this.service.changeSubmitStatus(true);
  }


}
