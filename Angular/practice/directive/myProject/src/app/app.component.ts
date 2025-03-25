import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directive/highlight.directive';
import { AppClassDirective } from './directive/app-class.directive';
import { StyleDirective } from './directive/style.directive';
import { BlobOptions } from 'node:buffer';
import { IfDirective } from './directive/if.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProfileComponent,LoginComponent,WelcomeComponent,FormsModule,CommonModule,HighlightDirective,AppClassDirective,StyleDirective,IfDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myProject';
  name='';
  isEnable:boolean=false;
  isloggedIn:boolean=false;
  
  change(){
    this.isEnable=!this.isEnable;
    this.isloggedIn=!this.isloggedIn;
  }
}
