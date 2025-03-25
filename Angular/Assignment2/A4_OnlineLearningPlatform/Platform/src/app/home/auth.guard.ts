import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // Allow access if the user is authenticated
    } else {
      //this.router.navigate(['/login']); // Redirect to login if not authenticated
      alert("Login first");
      return false; // Prevent access to the route
    }
  }

  canActivateChild(): boolean {
    if (this.authService.isAuthenticated() && this.authService.isAdmin()) {
      return true; // Allow access if the user is logged in and is an admin
    } else {
      alert("You are not Admin")
      //this.router.navigate(['/unauthorized']); // Redirect if not authorized
      return false; // Prevent access to admin child routes
    }
  }
}