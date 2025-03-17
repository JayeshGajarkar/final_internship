"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const leave_controller_1 = require("../contorllers/leave.controller");
const router = express_1.default.Router();
router.post('/leaves', leave_controller_1.EmployeeContorller.applyLeave);
router.get('/leaves/:id', leave_controller_1.EmployeeContorller.getLeaveHistory);
router.get('/leaves/all/records', leave_controller_1.EmployeeContorller.getAllLeaves);
router.get('/leaves/getPending/Pending', leave_controller_1.EmployeeContorller.getPendingStatus);
router.post('/leaves/:id/approve', leave_controller_1.EmployeeContorller.approveRequest);
router.post('/leaves/:id/reject', leave_controller_1.EmployeeContorller.rejectRequest);
exports.default = router;
