import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title='project';
  parentData:string="Hello from app component";
  receivedData:string='';

  receiveData(event:string){
    this.receivedData=event;
  }
}
