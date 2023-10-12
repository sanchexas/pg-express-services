import { Client, ClientConfig } from "pg";
import { config } from "dotenv";

config();
const DB_SERVER_PORT: string | undefined = process.env.DB_SERVER_PORT;
const DEFAULT_DB_SERVER_PORT = 5432;
const dbconfig: ClientConfig = {
    host: process.env.DB_SERVER_HOST,
    port: !DB_SERVER_PORT ? DEFAULT_DB_SERVER_PORT : +DB_SERVER_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
};

export const dbConnection: Client = new Client(dbconfig);