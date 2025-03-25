import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FirstService {

  constructor() { }

  getHello():string{
    return `Hello from this first service`;
  }
}
