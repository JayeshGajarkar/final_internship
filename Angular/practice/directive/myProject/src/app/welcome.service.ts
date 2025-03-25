import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor() { 
  }

  getString(){
    return "Welcome";
  }
}
