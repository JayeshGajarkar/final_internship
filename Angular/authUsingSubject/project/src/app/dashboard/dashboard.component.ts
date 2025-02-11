import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private service:AuthService){}
    user:string | null='';
    ngOnInit(){
      this.service.user$.subscribe((user)=>{
        this.user=user;
      });
    }
}
