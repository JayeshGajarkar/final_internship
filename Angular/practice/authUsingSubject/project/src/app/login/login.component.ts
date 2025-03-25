import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  editEnable:boolean=false;
  editForm:FormGroup;

  constructor(private service:AuthService){
    this.editForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
    });

  }

  logIn(){
    this.service.login({name:"Jayesh",email:"jayeshgajarkar@gmail.com",phoneNo:9307297339});
  }

  logOut(){
    this.service.logOut();
  }

  user:User | null= null;

  ngOnInit(){
    this.service.user$.subscribe((user)=>{
      this.user=user;
    });
  }

  editProfile(){
    this.editEnable=true;
    if (this.user) {
      this.editForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        PhoneNo:this.user.phoneNo
    });
    }
  }

  onSubmit() {
    if (this.editForm.valid) {
      const updatedUser = this.editForm.value;
      this.service.login(updatedUser);
      this.editEnable = false;
    }
  }
}
