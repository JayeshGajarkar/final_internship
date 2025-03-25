import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit',
  standalone: false,
  
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  constructor(private authService:AuthService){}

  
  changeToSave(){
    this.authService.changeToSave();
  }
}
