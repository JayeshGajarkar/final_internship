import { adminController } from "../controllers/adminController";
import { authenticateAdmin } from "../middlewares/authenticateAdmin";

const express=require('express')
const adminRouter=express.Router();

adminRouter.post('/add',authenticateAdmin,adminController.addBook)
adminRouter.post('/update/:id',authenticateAdmin,adminController.updateBook)
adminRouter.post('/remove/:id',authenticateAdmin,adminController.removeBook)

export default adminRouter;