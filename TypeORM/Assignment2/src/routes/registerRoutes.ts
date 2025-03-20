import { Router } from "express";
import { RegisterController } from "../controllers/registerController";

const registerRouter=Router();

registerRouter.post("/register",RegisterController.registerUser);
registerRouter.post("/delete/:id",RegisterController.deleteUser);

export default registerRouter;