import { Component } from '@angular/core';
import { WelcomeService } from '../welcome.service';
import { HighlightDirective } from '../directive/highlight.directive';


@Component({
  selector: 'app-welcome',
  imports: [HighlightDirective],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

export class WelcomeComponent {
  message:string;

  constructor(private service:WelcomeService){
    this.message=service.getString();
  }
}
