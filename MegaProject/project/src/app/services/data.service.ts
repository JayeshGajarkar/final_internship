import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http:HttpClient) { }

  getResponce(message:string):string{
    return "Hello from the service";
  }
  
}
