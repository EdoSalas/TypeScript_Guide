import express from "express";
import config from "./config/config";
import "reflect-metadata";
import pgConnector from "./database/pgConnector";

const app = express();
app.set('port', config.BACKEND_PORT);
app.set('database', config.DATABASE_PORT);

//Routes

const port = app.get('port');
const database = app.get('database');
const separator = "-----------------------------------";

try {
    pgConnector.initialize();
    console.log(`${separator}\n💾 Database listen on port: ${database} 💾\n${separator}`);
    app.listen(port,  () =>
    console.log(`🔥 Server listen on port:   ${port} 🔥\n${separator}`));
} catch (err) {
    console.log(`${separator}\n☠️❗ An error occurred ☠️❗\n${err}\n${separator}`);
};