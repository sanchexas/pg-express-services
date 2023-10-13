import express from 'express';
import { config } from 'dotenv';
config();
import bodyParser from 'body-parser';
import { uhistoryRouter } from './routes/uhistory.routes.js';

const app = express();
const API_PORT = process.env.API_PORT || 1002;
// usages
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//routes
app.use('/', uhistoryRouter); 
//listening
app.listen(API_PORT, ()=>{
    console.log(`Server works on PORT ${API_PORT}`);
});