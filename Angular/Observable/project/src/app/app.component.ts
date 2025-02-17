import { Component, OnInit } from '@angular/core';
import { filter, from, interval, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'project';

  // myOberservable=new Observable<string>((observer)=>{
  //   observer.next("1");
  //   observer.next("2");
  //   observer.next("3");
  //   observer.next("4");
  //   observer.next("5");
  //   observer.complete();
  // });

  // myOberservable=of(1,["A","B","C"],"jayesh",1711);

  myOberservable=from([1,2,3,4,5,6,7,8,9]);

  tansformedObservable=this.myOberservable.pipe(map((value)=>value*5),filter((value)=>value>=25));

  timeObservable=interval(1000);
  counterSub:any;

  
  ngOnInit(){
    this.counterSub=this.timeObservable.subscribe({
      next:(value)=>console.log(value),
      error:(err:any)=>console.log("Error",err),
      complete:()=>console.log("Completed")}
    );
  }

  unSubscribe(){
    this.counterSub.unsubscribe();
  }



}
