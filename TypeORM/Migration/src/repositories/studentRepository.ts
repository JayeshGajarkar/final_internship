import { AppDataSource } from "../config/db";
import { Student } from "../entities/student";

export const studentRepository = AppDataSource.getRepository(Student);