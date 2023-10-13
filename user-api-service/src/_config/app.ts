import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import userRouter from '../routes/user.routes';
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
        this.app.set('port', this.port || process.env.API_PORT || 1001);
    }
    usages(){
        this.app.use(express.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }
    routes(){
        this.app.use('/users',userRouter);
    }
    listen(){
        this.app.listen(this.app.get('port'));
        console.log(`Server works on PORT ${this.app.get('port')}`);
    }
}

