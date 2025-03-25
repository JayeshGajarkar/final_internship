import { AppDataSource } from "../config/db";
import { Course } from "../entities/course";

export const courseRepository = AppDataSource.getRepository(Course);