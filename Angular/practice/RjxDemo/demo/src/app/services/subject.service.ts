import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {


  // private data=["Hello","World"];
  private str="Jayesh";
  constructor() { }

  getData():Observable<string>{
    return of(this.str);
  }

  changeData(str:string){
    this.str=str;
    //console.log(str);
  }
  

}
