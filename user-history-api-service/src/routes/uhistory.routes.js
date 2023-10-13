import { Router } from "express";
import uhistoryController from "../controllers/uhistory.controller.js";

export const uhistoryRouter = Router();

uhistoryRouter.post('/save', uhistoryController.save);
uhistoryRouter.get('/byuser/:id_user', uhistoryController.getByUserIdAndPageNumber);
// uhistoryRouter.get('/byuser/:id_user?:page&:limit', uhistoryController.getByUserIdAndPageNumber);