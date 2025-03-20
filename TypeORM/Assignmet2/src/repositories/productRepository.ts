import { AppDataSource } from "../config/db";
import { Product } from "../entities/product";

export const productRepository = AppDataSource.getRepository(Product);