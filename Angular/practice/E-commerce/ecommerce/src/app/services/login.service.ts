import { Injectable } from '@angular/core';
import { User } from '../models/userModel';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor() { }

  private role:string='';
  private loggedIn:boolean=false;
  private UserList:Array<User>=[{id:1,name:"jayesh",email:'jayeshgajarkar@gmail.com',role:"Admin",password:"J@yesh1711"}];
  private sunmited:boolean=false;
  private currUser: User;

  subject = new BehaviorSubject<boolean>(this.loggedIn)
  //subject =new Subject<boolean>();


  logIn(role:string):void{
    this.role=role;
    this.loggedIn=true;
    //console.log(this.role==='Admin');
    this.subject.next(this.loggedIn);
  }

  logOut():void{
    this.role='';
    this.loggedIn=false;
    this.currUser=undefined;
    this.subject.next(this.loggedIn);
  }

  isAdmin():boolean{
    return this.role==='Admin';
  }

  isManager():boolean{
    return this.role==='Manager';
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  isSubmited(){
    return this.sunmited;
  }

  changeSubmitStatus(status:boolean){
    this.sunmited=status;
  }

  addUser(user:User){
    this.UserList.push(user);
    //console.log(user);
  }

  removeUser(user:User){
    const index=this.UserList.indexOf(user);
    this.UserList.splice(index,1);
  }

  getUser(){
    //console.log(this.UserList);
    return this.UserList;
  }

  getCurrUser(){
    return this.currUser;
  }

  isValid(email:string,password:string){
    const index=this.UserList.findIndex(ele=>ele.email===email);
    
    if(this.UserList[index].password===password){
      this.logIn(this.UserList[index].role);
      this.currUser=this.UserList[index];
    }

    return this.UserList[index].password===password;
  }

}

