import { OrderServices } from "../services/orderServices";


export class orderController {
    static async addProduct(req: any, res: any) {
        try {
            const { productName, price } = req.body;
            await OrderServices.addProduct(productName, price);
            res.status(201).send("Product added successfully");
        } catch (err: any) {
            console.log("Error from controller:", err.message);
            res.status(500).send(err.message);
        }
    }


    static async createOrder(req: any, res: any) {
        try {
            const { address, userId, productIds } = req.body;
            await OrderServices.createOrder(address, userId, productIds);
            res.status(201).send("Order created successfully");
        } catch (err: any) {
            console.log("Error from controller:", err.message);
            res.status(500).send(err.message);
        }
    }
}