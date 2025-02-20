import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routingdemo';
  constructor(private router:Router){}

  goToContact(){
    this.router.navigate(['/contact']);
  }

  array:Array<number>=[1,2,3,4,5,6];

  addEle(){
    const num:number=Math.floor(Math.random()*10);
    this.array.push(num);
    console.log("Added number",num);
  }

}
