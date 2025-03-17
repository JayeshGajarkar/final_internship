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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeContorller = void 0;
const leave_service_1 = require("../services/leave.service");
class EmployeeContorller {
    static applyLeave(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield leave_service_1.LeaveService.applyLeave(req.body);
                res.send("Leave applied sucessfully !");
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ error: error.meassage });
            }
        });
    }
    static getAllLeaves(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const leaves = yield leave_service_1.LeaveService.getAllLeaves();
                res.json(leaves);
            }
            catch (err) {
                console.log(err);
                res.json({ error: err.meassage });
            }
        });
    }
    static getLeaveHistory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee_id = parseInt(req.params.id);
            try {
                const leaveHistory = yield leave_service_1.LeaveService.getEmployeeLeaves(employee_id);
                res.json(leaveHistory);
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ error: error.message });
            }
        });
    }
    static getPendingStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pendingRecords = yield leave_service_1.LeaveService.getPendingRecords("Pending");
                res.json(pendingRecords);
            }
            catch (err) {
                console.log(err);
                res.status(500).json({ err: err.meassage });
            }
        });
    }
    static approveRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                yield leave_service_1.LeaveService.approveOrRejectRequest(id, "Approved");
                res.send("Record updated sucessfully");
            }
            catch (err) {
                res.status(500).json({ err: err });
            }
        });
    }
    static rejectRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                yield leave_service_1.LeaveService.approveOrRejectRequest(id, "Rejected");
                res.send("Record updated sucessfully");
            }
            catch (err) {
                res.status(500).json({ err: err });
            }
        });
    }
}
exports.EmployeeContorller = EmployeeContorller;
