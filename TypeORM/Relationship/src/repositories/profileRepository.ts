import { AppDataSource } from "../config/db";
import { Profile_J3 } from "../entities/profile";

export const profileRepository=AppDataSource.getRepository(Profile_J3);