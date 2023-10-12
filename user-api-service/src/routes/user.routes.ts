import { Router } from "express";
import userController from "../controllers/user.controller";

const userRouter = Router();

userRouter.get('/all', userController.getAll);
userRouter.post('/create', userController.create);

export default userRouter;