import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private service:AuthService){}
    user:User| null=null;
    ngOnInit(){
      this.service.user$.subscribe((user)=>{
        this.user=user;
      });
    }
}
