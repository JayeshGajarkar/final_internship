import { Response,Request } from "express";
import { LeaveService } from "../services/leave.service";




export class EmployeeContorller{
    static async applyLeave(req:Request,res:Response):Promise<void>{
        try{
            await LeaveService.applyLeave(req.body);
            res.send("Leave applied sucessfully !")
        }catch(error:any){
            console.log(error);
            res.status(500).json({error:error.meassage})
        }
        
    }


    static async getAllLeaves(req:Request,res:Response){
        try{
            const leaves=await LeaveService.getAllLeaves();
            res.json(leaves);
        }catch(err:any){
            console.log(err);
            res.json({error:err.meassage});
        }
    }

    static async getLeaveHistory(req: Request, res: Response):Promise<void> {
        const employee_id=parseInt(req.params.id);
        try {
            const leaveHistory = await LeaveService.getEmployeeLeaves(employee_id);
            res.json(leaveHistory);
        } catch (error: any) {
            console.log(error);
            res.status(500).json({ error: error.message });
        }
    }

    static async getPendingStatus(req:Request,res:Response):Promise<void>{
        try{
            const pendingRecords=await LeaveService.getPendingRecords("Pending");
            res.json(pendingRecords);
        }catch(err:any){
            console.log(err);
            res.status(500).json({err:err.meassage})
        }
    }


    static async approveRequest(req:Request,res:Response){
        const id=parseInt(req.params.id);
        try{
            await LeaveService.approveOrRejectRequest(id,"Approved");
            res.send("Record updated sucessfully");
        }catch(err:any){
            res.status(500).json({err:err})
        }
    }


    static async rejectRequest(req:Request,res:Response){
        const id=parseInt(req.params.id);
        try{
            await LeaveService.approveOrRejectRequest(id,"Rejected");
            res.send("Record updated sucessfully");
        }catch(err:any){
            res.status(500).json({err:err})
        }
    }
}