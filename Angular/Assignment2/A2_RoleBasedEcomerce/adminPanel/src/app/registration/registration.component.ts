import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  standalone: false,
  
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit(form:any) {
    console.log('Form Submitted!', this.user);
    form.reset();
  }
}
