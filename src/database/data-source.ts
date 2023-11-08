import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUserTable1699200643381 } from './migrations/1699200643381-CreateUserTable';
import User from "../app/entities/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "typeorm",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUserTable1699200643381],
    subscribers: [],
})
