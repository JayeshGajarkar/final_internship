import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcomerceService {

  constructor() { }

  private role:string='';

  isAdmin(){
    return this.role==="Admin";
  }

  isManager(){
    return this.role==="Manager";
  }

  isSupport(){
    return this.role==="Support";
  }

  logIn(role:string){
    this.role=role;
  }

}
