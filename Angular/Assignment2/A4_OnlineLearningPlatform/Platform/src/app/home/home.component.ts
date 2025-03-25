import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    constructor(private authService:AuthService){}

    logIn(role:string){
      this.authService.logIn(role);
    }

    logOut(){
      this.authService.logOut();
    }
}
