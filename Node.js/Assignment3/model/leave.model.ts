export interface Leave{
    id?:number;
    employee_id:number;
    start_date:Date;
    end_date:Date;
    leave_type:"Sick"|"Vacation"|String;
    status:"Pending"|"Approved"|"Rejected"|String;
    reason:string;
}

export interface Employee {
    id: number;
    name: string;
    email: string;
    role: 'employee' | 'manager' | 'admin';
}