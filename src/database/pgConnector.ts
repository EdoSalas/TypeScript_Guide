import { DataSource } from "typeorm";
import config from "../config/config";
import User from "../model/user";

const pgConnector = new DataSource({
    type: "postgres",
    url: config.DATABASE_URI,
    synchronize: true,
    entities: [
        User
    ]
});

export default pgConnector;