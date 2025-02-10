import { Component } from '@angular/core';
import { EcomerceService } from './Services/ecomerce.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adminPanel';
  constructor(private eservice:EcomerceService){}

  logIn(role:string){
    this.eservice.logIn(role);
  }
}
