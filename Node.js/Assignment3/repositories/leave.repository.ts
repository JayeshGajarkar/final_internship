import {poolPromise} from "../config/db"
import { Leave } from "../model/leave.model"
import sql from "mssql"

export class LeaveRepository{
    static async createLeave(leave:Leave):Promise<void>{
        const pool:any=await poolPromise;
        await pool.request().input("id",leave.id)
        .input("employee_id",sql.Int,leave.employee_id)
        .input("start_date",sql.Date,leave.start_date)
        .input("end_date",sql.Date,leave.end_date)
        .input('leave_type',sql.NVarChar,leave.leave_type)
        .input('status',sql.NVarChar,leave.status)
        .input('reason',sql.NVarChar,leave.reason)
        .query(`INSERT INTO Leave_J2 (id, employee_id, start_date, end_date, leave_type, status, reason) 
                VALUES (@id, @employee_id, @start_date, @end_date, @leave_type, @status, @reason)`);
    }

    static async getLeaveHistory(employee_id:number):Promise<Leave[]>{
        const pool:any=await poolPromise;
        const result=await pool.request().input("employee_id",sql.Int,employee_id)
        .query('SELECT * FROM Leave_J2 WHERE employee_id=(@employee_id)');
        return result.recordset;
    }

    static async getPendingRecords(status:string):Promise<Leave[]>{
        const pool:any=await poolPromise;
        const result=await pool.request().input("status",sql.NVarChar,status)
        .query('SELECT * FROM Leave_J2 WHERE status=(@status)');
        return result.recordset;
    }

    static async approveOrRejectRequest(id:number,status:string){
        const pool:any=await poolPromise;
        const result=await pool.request().input('id',sql.Int,id).input("status",sql.NVarChar,status)
        .query('UPDATE Leave_J2 SET status = @status WHERE id = @id status = \'Pending\'');
    }


    static async getAllLeaves(){
        const pool:any=await poolPromise;
        const result=await pool.request()
        .query('SELECT * FROM Leave_J2');
        return result.recordset;
    }
}
