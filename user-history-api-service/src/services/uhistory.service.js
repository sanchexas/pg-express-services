import { dbConnection } from "../_config/db_config.js";

class UhistoryService{
    DEFAULT_SHOW_LIMIT = 3;
    DEFAULT_PAGE_NUMBER = 1;

    async save(userActivity){
        try{
            await dbConnection.query(
                'INSERT INTO uhistory_logs (user_id, activity_type) VALUES ($1, $2)',
                [userActivity.user_id, userActivity.activity_type]
            );
        }catch(e){
            return {
                message: "Не удалось сохранить действие пользователя.",
                reason: e.message
            };
        }
    }
    // получение истории действий пользователя с разбивкой на страницы
    async getByUserIdAndPageNumber(id_user, page, limit){
        try{
            limit = !limit || limit <= 0 ? this.DEFAULT_SHOW_LIMIT : +limit;
            page = !page || page <= 0 ? this.DEFAULT_PAGE_NUMBER : +page;
            const skipItems = (page - 1) * limit;
            const result = await dbConnection.query(
                'SELECT * FROM uhistory_logs WHERE user_id = $1 ORDER BY id_log DESC LIMIT $2 OFFSET $3',
                [+id_user, limit, skipItems]
            );
            return result.rows;
        } catch (e) {
            return {
                message: "Не удалось получить историю действий пользователя.",
                reason: e.message
            };
        }
    }
}  

export default new UhistoryService;