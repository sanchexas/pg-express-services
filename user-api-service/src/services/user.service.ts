import { QueryResult } from "pg";
import { dbConnection } from "../_config/db_config";
import { HistoryLogDto } from "../_dtos/history-log.dtos";
import { UserDto, UserEntityDto } from "../_dtos/user.dtos";
import request from "request";

class UserService{
    public async create(user: UserDto){
        try{
            const new_user_id = await dbConnection.query('SELECT COUNT(id_user) FROM users');
            await dbConnection.query(
                'INSERT INTO users (name, surname, city, age) VALUES ($1, $2, $3, $4)',
                [user.name, user.surname, user.city, user.age],
            );
            this.saveHistory({user_id: ++new_user_id.rows[0].count, activity_type: 'create'});
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
    public async update(user: UserEntityDto){
        try{
            await dbConnection.query<UserEntityDto>(
                'UPDATE users SET name = $2, surname = $3, city = $4, age = $5 WHERE id_user = $1',
                [user.id_user, user.name, user.surname, user.city, user.age],
            );
            this.saveHistory({user_id: user.id_user, activity_type: 'update'});
        }catch(error){
            if(error instanceof Error){
                return {
                    message: "Ошибка, некорректные данные, пользователь не обновлен.",
                    reason: error.message
                };
            } 
            console.log(error);
        }
    }
    public async getAll(){
        try {
            const result: QueryResult<UserEntityDto> = await dbConnection.query<UserEntityDto>('SELECT * FROM users');
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
    // отправка событий пользователя (сохранение)
    private async saveHistory(userActivity: HistoryLogDto){
        request.post(
            `${process.env.USER_HISTORY_API_URL}/save`,
            {json: userActivity},
            (error, response, body)=>{
                if (!error && response.statusCode == 200) {
                    console.log(body);
                }
            }
        )
    }
}

export default new UserService;