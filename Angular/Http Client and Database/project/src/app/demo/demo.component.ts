import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../model/user';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit{

  constructor(private dataService: DataService) { }
  

  user!:User;
  users:User[]=[];
  addUserForm!:FormGroup;
  editEnable:boolean=false;


  ngOnInit() {
    this.addUserForm = new FormGroup({
      id:new FormControl(null),
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  addUser() {
    if(!this.editEnable){
      this.dataService.addUser(this.addUserForm.value).subscribe();
    }else{
      this.dataService.editUser(this.addUserForm.value).subscribe();
      this.editEnable=false;
    }
    
  }

  editUser(user:User){
    this.editEnable=true;
    this.addUserForm.setValue({
      id:user.id,
      name:user.name,
      email:user.email,
      password:user.password,
    })
  }

  getUser(){
    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  deleteUser(user:User){
    this.dataService.deleteUser(user).subscribe();
  }
  
}
