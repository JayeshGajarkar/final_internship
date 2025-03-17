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
exports.LeaveService = void 0;
const leave_repository_1 = require("../repositories/leave.repository");
class LeaveService {
    static applyLeave(leave) {
        return __awaiter(this, void 0, void 0, function* () {
            yield leave_repository_1.LeaveRepository.createLeave(leave);
        });
    }
    static getEmployeeLeaves(employee_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield leave_repository_1.LeaveRepository.getLeaveHistory(employee_id);
        });
    }
    static getPendingRecords(status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield leave_repository_1.LeaveRepository.getPendingRecords(status);
        });
    }
    static approveOrRejectRequest(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield leave_repository_1.LeaveRepository.approveOrRejectRequest(id, status);
        });
    }
    static getAllLeaves() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield leave_repository_1.LeaveRepository.getAllLeaves();
        });
    }
}
exports.LeaveService = LeaveService;
