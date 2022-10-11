## TypeScript Guide
[![Release](https://img.shields.io/badge/Platform-TypeScript-blue)]()
[![Language](https://img.shields.io/badge/Languaje-NodeJS-brightgreen)]()
[![Language](https://img.shields.io/badge/Command-npm-lightgrey)]()

Create many folders
```bash
mkdir config
```
```bash
mkdir controller
```
```bash
mkdir database
```
```bash
mkdir model
```
```bash
mkdir response
```
```bash
mkdir routes
```

Go to [config](config) folder

Go to [database](database) folder

Go to [model](model) folder

Go to [response](response) folder

Create app.ts file
```bash
touch app.ts
```
Into [app](app.ts) paste the following code
```ts
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
```

Go to [home directory](https://github.com/EdoSalas/TypeScript_Guide) to continue

***
[![Powered by](https://img.shields.io/badge/Powered%20by-Eduardo%20Salas-blue)]()
***