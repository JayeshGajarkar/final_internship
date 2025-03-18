import { Request, Response } from "express";
import { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe } from "../services/recepeServices";

export const createRecipeController = async (req: Request, res: Response) => {
    try {
        const recipe = await createRecipe(req.body);
        res.status(201).json(recipe);
    } catch (error: any) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

export const getRecipesController = async (req: Request, res: Response) => {
    try {
        const recipes = await getRecipes();
        res.json(recipes);
    } catch (error: any) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

export const getRecipeByIdController = async (req: Request, res: Response) => {
    try {
        const recipe = await getRecipeById(Number(req.params.id));
        if (!recipe) {
            res.status(404).json({ message: "Recipe not found" });
            return;
        }
        res.json(recipe);
    } catch (error: any) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

export const updateRecipeController = async (req: Request, res: Response) => {
    try {
        const updateData  = req.body;
        const result = await updateRecipe(Number(req.params.id), updateData);
        if (result.affected === 0) {
            res.status(404).json({ message: "Recipe not found" });
            return;
        }
        res.json({ message: "Recipe updated successfully" });
    } catch (error: any) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

export const deleteRecipeController = async (req: Request, res: Response) => {
    try {
        const result = await deleteRecipe(Number(req.params.id));
        if (result.affected === 0) {
            res.status(404).json({ message: "Recipe not found" });
            return;
        }
        res.json({ message: "Recipe deleted successfully" });
    } catch (error: any) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};