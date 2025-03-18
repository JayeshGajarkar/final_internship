import { AppDataSource } from "../config/db";
import { Recipe_J } from "../entities/recipe";

export const recipeRepository = AppDataSource.getRepository(Recipe_J);