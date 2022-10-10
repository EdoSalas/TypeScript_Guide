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
mkdir model
```
```bash
mkdir response
```
```bash
mkdir routes
```

Go to [config](config) folder

Go to [response](response) folder

Create app.ts file
```bash
touch app.ts
```
Into [app](app.ts) paste the following code
```ts
import express from "express";
import config from "./config/config";

const app = express();
app.set('port', config.BACKEND_PORT || 4002);

//Routes

const port = app.get('port');
app.listen(port,  () => console.log(`Server listen on port ${port}`));
```

Go to [home directory](/)