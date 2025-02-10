import { Component} from '@angular/core';
import { TaskService } from '../task.service';
import { Task,Status } from '../task.model';

@Component({
  selector: 'app-task-create',
  standalone: false,
  
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})

export class TaskCreateComponent {
  constructor(private service:TaskService){}
  /*task:string='';

  addTask(task:string){
      this.service.addTask(this.task);
      this.taskData='';
  }*/

  id:number=1;
  task:string;
  priority:number;
  status:Status;
  taskData:Task;

  addTask(task:string,p:number,s:Status){
      this.taskData={
        id:this.id++,
        name:task,
        priority:p,
        status:s
      };

      this.service.addTask(this.taskData);
      this.clearForm()

  }

  clearForm(){
    this.task='';
    this.status=null;
  }


}
