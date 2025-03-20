import { AppDataSource } from "../config/db";
import { Order } from "../entities/order";

export const orderRepository = AppDataSource.getRepository(Order);