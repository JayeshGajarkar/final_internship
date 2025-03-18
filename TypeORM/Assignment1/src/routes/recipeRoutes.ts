import { Router } from "express";
import { createRecipeController, getRecipesController, getRecipeByIdController, updateRecipeController, deleteRecipeController } from "../controller/recipeContorller";

const recipeRouter = Router();

recipeRouter.post("/", createRecipeController);
recipeRouter.get("/", getRecipesController);
recipeRouter.get("/:id", getRecipeByIdController);
recipeRouter.put("/:id", updateRecipeController);
recipeRouter.delete("/:id", deleteRecipeController);

export default recipeRouter;