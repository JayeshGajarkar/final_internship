import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = new BehaviorSubject<string | null>(this.getUserFromLocalStorage());
  user$ = this.user.asObservable();

  constructor() {}

  login(username: string) {
    this.user.next(username);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
  }

  logOut() {
    this.user.next(null);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('username');
  }

  private getUserFromLocalStorage(): string | null {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      return localStorage.getItem('username');
    }
    return null;
  }
}