import { Component } from '@angular/core';
import { SecondService } from './services/second.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';

  constructor(private second:SecondService){}

  ngOnInit(){
    console.log(this.second.getHello());
  }
}
