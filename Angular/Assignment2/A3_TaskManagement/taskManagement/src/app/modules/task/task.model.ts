export enum Status {
    Pending = "Pending",
    Completed = "Completed",
    InProgress = "In Progress"
  }
  
  export interface Task {
    id: number;
    name: string;
    priority: number;
    status: Status;
  }