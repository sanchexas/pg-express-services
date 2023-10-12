import { Request, Response } from "express";
import userService from "../services/user.service";
import { UserDto } from "../_dtos/user.dtos";

class UserController {
    public create(req: Request<UserDto>, res: Response): void{
        userService.create(req.body).then((result)=>{
            result ? res.send(result) : res.sendStatus(200);
        });
    }
    public update(req: Request, res: Response){

    }
    public getById(req: Request, res: Response){

    }
    public getAll(req: Request, res: Response): void{
        userService.getAll().then((result)=>{
            result ? res.send(result) : res.sendStatus(200);
        });
    }
}

export default new UserController;