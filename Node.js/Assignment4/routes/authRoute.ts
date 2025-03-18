import { AuthController } from "../controllers/authController";
import { authenticateUser } from "../middlewares/authenticateUser";
const express=require("express")
const authRouter = express.Router();

authRouter.post('/login', AuthController.login);
authRouter.get('/view/:id',authenticateUser,AuthController.viewBook);
authRouter.get('/search/:key',authenticateUser,AuthController.searchBook);
authRouter.post('/borrow/:id',authenticateUser,AuthController.borrowBook)

export default authRouter;
