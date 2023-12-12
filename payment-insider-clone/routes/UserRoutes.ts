
import express, { Router } from 'express';
const userRouter: Router = express.Router();
import { login, signup } from '../controller/UserController';



userRouter.post("/signup", signup);
userRouter.post("/login", login);

export default userRouter;
