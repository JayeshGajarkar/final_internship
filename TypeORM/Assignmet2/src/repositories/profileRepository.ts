import { AppDataSource } from "../config/db";
import { Profile } from "../entities/profile";

export const profileRepository=AppDataSource.getRepository(Profile);