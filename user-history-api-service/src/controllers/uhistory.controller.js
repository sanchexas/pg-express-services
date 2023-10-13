import uhistoryService from "../services/uhistory.service.js";

class UhistoryController{
    save(req, res){
        uhistoryService.save(req.body).then((result)=>{
            result ? res.send(result) : res.sendStatus(200);
        });
    }
    getByUserIdAndPageNumber(req, res){
        const {id_user} = req.params;
        const {page, limit} = req.query;
        uhistoryService.getByUserIdAndPageNumber(id_user, page, limit).then((result)=>{
            res.send(result);
        });
    }
}

export default new UhistoryController;