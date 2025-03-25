import { Component, ViewChild } from '@angular/core';
import { ConditionalDirective } from './directive/conditional.directive';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projection';
  @ViewChild(ConditionalDirective) conditional!:ConditionalDirective;

  isAdmin:boolean=false;

  adminLogin(){
    this.isAdmin=true;
  }

  userLogin(){
    this.isAdmin=false;
  }


}
