import { AuthController } from "../controllers/authController";
const express=require("express")
const authRouter = express.Router();

authRouter.post('/register', AuthController.register);
authRouter.post('/login', AuthController.login);


export default authRouter;
