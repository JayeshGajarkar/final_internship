import { Injectable } from '@angular/core';
import { FirstService } from './first.service';

@Injectable({
  providedIn: 'root'
})
export class SecondService {

  constructor(private first:FirstService) { }

  getHello():string{
    return this.first.getHello();
  }


}
