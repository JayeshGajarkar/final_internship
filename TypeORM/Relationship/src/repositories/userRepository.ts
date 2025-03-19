import { AppDataSource } from "../config/db";
import { User_J3} from "../entities/user";

export const userRepository=AppDataSource.getRepository(User_J3);
