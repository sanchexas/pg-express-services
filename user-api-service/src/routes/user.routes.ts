import { Router } from "express";
import userController from "../controllers/user.controller";

const userRouter = Router();

userRouter.get('/', userController.getAll);
userRouter.post('/create', userController.create);
userRouter.put('/update/:id_user', userController.update);

export default userRouter;