import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customPipes';
  creditNumber:string;
  credit:string;
  
  creditForm:FormGroup=new FormGroup({
    creditNo:new FormControl('',[Validators.minLength(12),,Validators.required])
  })

  onSubmit(){
    this.creditNumber=this.creditForm.value.creditNo;
  }
}
