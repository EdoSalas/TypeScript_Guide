import { DataSource } from "typeorm";
import config from "../config/config";
import UserModel from "../model/user";

const pgConnector = new DataSource({
    type: "postgres",
    url: config.DATABASE_URI,
    synchronize: true,
    entities: [
        UserModel
    ]
});

export default pgConnector;