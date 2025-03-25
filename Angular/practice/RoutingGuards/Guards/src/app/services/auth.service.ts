import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private submited:boolean=false;

  isSubmited(){
    return this.submited;
  }

  changeSubmitStatus(status:boolean){
    this.submited=status;
  }
}
