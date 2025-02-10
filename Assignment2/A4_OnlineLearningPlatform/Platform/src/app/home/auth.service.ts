import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }
  private authenticated:boolean=false;
  private role:string="User";
  private hasUnsavedChanges:boolean=false;
  
  isAuthenticated(){
    return this.authenticated;
  }

  logIn(role:string){
    this.authenticated=true;
    this.role=role;
  }

  logOut(){
    this.authenticated=false;
  }

  isAdmin(){
    return this.role==="Admin";
  }

  changeToSave(){
    this.hasUnsavedChanges=true;
  }

}
