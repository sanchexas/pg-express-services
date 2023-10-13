import { Request, Response, response } from "express";
import userService from "../services/user.service";
import { UserDto, UserEntityDto } from "../_dtos/user.dtos";

class UserController {
    public create(req: Request<UserDto>, res: Response): void{
        userService.create(req.body).then((result)=>{
            result ? res.send(result) : res.sendStatus(200);
        });
    }
    public update(req: Request<UserEntityDto>, res: Response): void{
        const {id_user} = req.params;
        const {name, surname, city, age} = req.body;
        userService.update({id_user, name, surname, city, age}).then((result)=>{
             result ? res.send(result) : res.sendStatus(200);
        });
    }
    public getAll(req: Request, res: Response): void{
        userService.getAll().then((result)=>{
            result ? res.send(result) : res.sendStatus(200);
        });
    }
}

export default new UserController;