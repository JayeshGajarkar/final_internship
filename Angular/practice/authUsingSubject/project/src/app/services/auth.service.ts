import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = new BehaviorSubject<User | null>(this.getUserFromLocalStorage());
  user$ = this.user.asObservable();
  private Users:Array<User>=[
    {name:"jayesh",email:"jayeshgajarkar@gmail.com",phoneNo:9307297339},
    {name:"xyz",email:"xyz@gmail.com",phoneNo:1234567890},
    {name:"abc",email:"abc@gmail.com",phoneNo:9087654321}
  ];

  constructor() {}

  login(username: User) {
    this.user.next(username);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', JSON.stringify(username));
  }

  logOut() {
    this.user.next(null);
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('username');
  }

  private getUserFromLocalStorage(): User | null {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      const userData = localStorage.getItem('username');
      if (userData) {
        try {
          return JSON.parse(userData);
        } catch (error) {
          console.error('Error parsing user data from localStorage', error);
          return null;
        }
      }
    }
    return null;
  }

  loginWithUser(userName:string|null){
    const index=this.Users.findIndex(user=>user.name==userName);
    if(index>=0){
      this.login(this.Users[index]);
    }else{
      alert("User not exist");
    }
    
  }
}