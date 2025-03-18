import { UserController } from "../controllers/userController";

const express = require('express');
const { authenticateUser } = require('../middlewares/authenticateUser');
const userRouter = express.Router();

userRouter.get('/', authenticateUser, UserController.getAllUsers);

export default userRouter;

