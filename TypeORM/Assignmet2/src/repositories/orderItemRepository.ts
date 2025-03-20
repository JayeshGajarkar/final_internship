import { AppDataSource, dbconnect } from "../config/db";
import { OrderItem } from "../entities/orderItem";

dbconnect()

const orderItemRepository = AppDataSource.getRepository(OrderItem);
export default orderItemRepository;