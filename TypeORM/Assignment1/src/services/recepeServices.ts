import { recipeRepository } from "../repository/recipeRepository";
import { Recipe_J } from "../entities/recipe";

export const createRecipe = async (data: Partial<Recipe_J>) => {
    const recipe = recipeRepository.create(data);
    return await recipeRepository.save(recipe);
};

export const getRecipes = async () => {
    return await recipeRepository.find();
};

export const getRecipeById = async (id: number) => {
    return await recipeRepository.findOne({ where: { id } });
};

export const updateRecipe = async (id: number, data: Partial<Recipe_J>) => {
    return await recipeRepository.update(id, data);
};

export const deleteRecipe = async (id: number) => {
    return await recipeRepository.delete(id);
};