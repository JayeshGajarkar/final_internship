import { Injectable } from '@angular/core';
import { Task,Status } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { 
  }

  private taskArray:Task[]=[];

  addTask(task:Task):void{
    this.taskArray.push(task);
    this.sort();
    //console.log(this.taskArray);
  }

  getTasks(){
    return this.taskArray;
  }

  removeTask(task: Task) {
    const index = this.taskArray.indexOf(task);
    if (index > -1) {
      this.taskArray.splice(index, 1);
    }
    this.sort();
  }

  changeStatus(task:Task){
    const index = this.taskArray.indexOf(task);
    if(task.status=="Pending"){
      this.taskArray[index].status=Status.InProgress;
    }else{
      this.taskArray[index].status=Status.Pending;
    }
  }

  sort(){
    this.taskArray.sort((a,b)=>a.priority-b.priority);
  }
  


}
