import { dbConnection } from "../_config/db_config";
import { UserDto } from "../_dtos/user.dtos";

class UserService{
    public async create(user: UserDto){
        try{
            await dbConnection.query(
                'INSERT INTO users (name, surname, city, age) VALUES ($1, $2, $3, $4)',
                [user.name, user.surname, user.city, user.age],
            );
        }catch(error){
            if(error instanceof Error){
                return {
                    message: "Ошибка, некорректные данные, пользователь не создан.",
                    reason: error.message
                };
            } 
            console.log(error);
        }
    }
    public async update(user: UserDto){

    }
    public async getById(id: number){

    }
    public async getAll(){

    }
}

export default new UserService;