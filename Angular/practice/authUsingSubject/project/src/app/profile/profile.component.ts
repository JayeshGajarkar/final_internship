import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  constructor(private service:AuthService,private route:ActivatedRoute){}
  
    user:User | null=null;
  
    ngOnInit(){
      this.service.user$.subscribe((user)=>{
        this.user=user;
      });

      this.route.paramMap.subscribe(params => {
        const userName = params.get('name');
        if(userName){
          this.service.loginWithUser(userName);
        }
      });
    }

    
}
