import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService){}

  logIn(){
    this.service.login("Jayesh");
  }

  logOut(){
    this.service.logOut();
  }

  user:string | null='';

  ngOnInit(){
    this.service.user$.subscribe((user)=>{
      this.user=user;
    });
  }
}
