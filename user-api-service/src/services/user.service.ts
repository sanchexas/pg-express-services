import { dbConnection } from "../_config/db_config";
import { UserDto, UserEntityDto } from "../_dtos/user.dtos";

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
        try {
            const result = await dbConnection.query<UserEntityDto>('SELECT * FROM users');
            return result.rows;
        } catch (error) {
            if (error instanceof Error) {
                return {
                    message: "Ошибка, не удалось получить пользователей.",
                    reason: error.message
                };
            }
            console.log(error);
        }       
    }
}

export default new UserService;