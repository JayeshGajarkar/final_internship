import { AppDataSource } from "../config/db";

export const queryRunner=AppDataSource.createQueryRunner();


