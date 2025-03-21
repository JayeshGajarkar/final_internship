import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.service.isLoggedIn()) {
      return true; 
    } else {
      alert("Login first");
      return false; 
    }
  }
}