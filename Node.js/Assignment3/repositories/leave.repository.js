"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveRepository = void 0;
const db_1 = require("../config/db");
const mssql_1 = __importDefault(require("mssql"));
class LeaveRepository {
    static createLeave(leave) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield db_1.poolPromise;
            yield pool.request().input("id", leave.id)
                .input("employee_id", mssql_1.default.Int, leave.employee_id)
                .input("start_date", mssql_1.default.Date, leave.start_date)
                .input("end_date", mssql_1.default.Date, leave.end_date)
                .input('leave_type', mssql_1.default.NVarChar, leave.leave_type)
                .input('status', mssql_1.default.NVarChar, leave.status)
                .input('reason', mssql_1.default.NVarChar, leave.reason)
                .query(`INSERT INTO Leave_J2 (id, employee_id, start_date, end_date, leave_type, status, reason) 
                VALUES (@id, @employee_id, @start_date, @end_date, @leave_type, @status, @reason)`);
        });
    }
    static getLeaveHistory(employee_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield db_1.poolPromise;
            const result = yield pool.request().input("employee_id", mssql_1.default.Int, employee_id)
                .query('SELECT * FROM Leave_J2 WHERE employee_id=(@employee_id)');
            return result.recordset;
        });
    }
    static getPendingRecords(status) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield db_1.poolPromise;
            const result = yield pool.request().input("status", mssql_1.default.NVarChar, status)
                .query('SELECT * FROM Leave_J2 WHERE status=(@status)');
            return result.recordset;
        });
    }
    static approveOrRejectRequest(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield db_1.poolPromise;
            const result = yield pool.request().input('id', mssql_1.default.Int, id).input("status", mssql_1.default.NVarChar, status)
                .query('UPDATE Leave_J2 SET status = @status WHERE id = @id status = \'Pending\'');
        });
    }
    static getAllLeaves() {
        return __awaiter(this, void 0, void 0, function* () {
            const pool = yield db_1.poolPromise;
            const result = yield pool.request()
                .query('SELECT * FROM Leave_J2');
            return result.recordset;
        });
    }
}
exports.LeaveRepository = LeaveRepository;
