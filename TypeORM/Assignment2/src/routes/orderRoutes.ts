import { Router } from "express";
import { orderController } from "../controllers/orderController";

const orderRouter = Router();

orderRouter.post('/addProduct',orderController.addProduct);
orderRouter.post('/createOrder',orderController.createOrder);

export default orderRouter;