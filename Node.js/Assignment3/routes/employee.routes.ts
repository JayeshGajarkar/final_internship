import express from 'express';
import { EmployeeContorller } from '../contorllers/leave.controller';

const router=express.Router();

router.post('/leaves',EmployeeContorller.applyLeave);
router.get('/leaves/:id',EmployeeContorller.getLeaveHistory)
router.get('/leaves/all/records',EmployeeContorller.getAllLeaves)
router.get('/leaves/getPending/Pending',EmployeeContorller.getPendingStatus)
router.post('/leaves/:id/approve',EmployeeContorller.approveRequest)
router.post('/leaves/:id/reject',EmployeeContorller.rejectRequest)


export default router;