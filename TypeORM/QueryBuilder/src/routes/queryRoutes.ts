import { Router } from "express";
import { queryController } from "../controllers/queryContorller";

const queryRouter = Router();

queryRouter.get("/:id",queryController.getUser)

export default queryRouter;