import express from 'express';
import { config } from 'dotenv';
config();
import bodyParser from 'body-parser';

const app = express();
const API_PORT = process.env.API_PORT || 1002;
// usages
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//routes

//listening
app.listen(API_PORT, ()=>{
    console.log(`Server works on PORT ${API_PORT}`);
})