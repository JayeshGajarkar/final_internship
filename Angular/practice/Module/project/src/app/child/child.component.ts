import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {
  @Input() childData:string="";
  @Output() childevent=new EventEmitter<string>();

  sendData(){
    this.childevent.emit("Hello from child");
  }
}
