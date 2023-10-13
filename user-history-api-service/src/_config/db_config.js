import pg from "pg";
import { config } from "dotenv";

config();
const DB_SERVER_PORT = process.env.DB_SERVER_PORT;
const DEFAULT_DB_SERVER_PORT = 5432;
const dbconfig = {
    host: process.env.DB_SERVER_HOST,
    port: !DB_SERVER_PORT ? DEFAULT_DB_SERVER_PORT : +DB_SERVER_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
};

export const dbConnection = new pg.Pool(dbconfig);