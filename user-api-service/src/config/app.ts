import express from 'express';
import { config } from 'dotenv';
config();
import { Application } from 'express';
import bodyParser from 'body-parser';

export class App{
    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.usages();
        this.routes();
    }
    settings(){
        this.app.set('port', this.port || process.env.API_PORT || 1000);
    }
    usages(){
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }
    routes(){
        // routes examples
        // this.app.use('/users',userRouter);
    }
    listen(){
        this.app.listen(this.app.get('port'));
        console.log(`Server works on PORT ${this.app.get('port')}`);
    }
}

