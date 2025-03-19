import { Router } from "express";
import { RegisterController } from "../controllers/registerController";

const registerRouter=Router();

registerRouter.post("/register",RegisterController.registerUser);

export default registerRouter;