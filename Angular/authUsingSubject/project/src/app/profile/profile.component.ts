import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private service:AuthService){}
  
    user:string | null='';
  
    ngOnInit(){
      this.service.user$.subscribe((user)=>{
        this.user=user;
      });
    }
}
