import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Status, Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  standalone: false,
  
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {
  
  taskList:Task[]=[];

  constructor(private service:TaskService){
    this.taskList=this.service.getTasks();
  }
    

  getTasks(){
    this.taskList=this.service.getTasks();
    //console.log(this.taskList);
  }

  removeTask(task:Task){
    this.service.removeTask(task);
  }

  changeStatus(task:Task){
    this.service.changeStatus(task);
  }

}
