import { LeaveRepository } from "../repositories/leave.repository";
import { Leave } from "../model/leave.model";


export class LeaveService{
    static async applyLeave(leave:Leave):Promise<void>{
        await LeaveRepository.createLeave(leave);
    }

    static async getEmployeeLeaves(employee_id:number):Promise<Leave[]>{
        return await LeaveRepository.getLeaveHistory(employee_id);
    }

    static async getPendingRecords(status:string):Promise<Leave[]>{
        return await LeaveRepository.getPendingRecords(status);
    }
    
    static async approveOrRejectRequest(id:number,status:string){
        return await LeaveRepository.approveOrRejectRequest(id,status);
    }

    static async getAllLeaves(){
        return await LeaveRepository.getAllLeaves();
    }
}