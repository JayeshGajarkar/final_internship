import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';

  observable=new Observable<any>(observer=>{
      observer.next("Hello"),
      observer.complete,
  });

  observer= {
    next:(value:string)=>console.log(value)
  };

  constructor(){
    this.observable.subscribe(this.observer);

  }
}
