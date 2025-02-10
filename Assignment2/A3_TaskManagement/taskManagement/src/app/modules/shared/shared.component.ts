import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared',
  standalone: false,
  
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css'
})

export class SharedComponent {
  @Input() label: string ;
  @Input() event: string ;

  @Output() childEvent=new EventEmitter<void>();

  sendEvent():void{
    this.childEvent.emit();
  }
}
