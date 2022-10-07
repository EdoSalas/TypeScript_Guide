## TypeScript Guide
[![Release](https://img.shields.io/badge/Platform-TypeScript-blue)]()
[![Language](https://img.shields.io/badge/Languaje-NodeJS-brightgreen)]()
[![Language](https://img.shields.io/badge/Command-npm-lightgrey)]()

***
## Table of Contents
- [Install](#install)
- [Dependences](#dependences)
- [Estructura](#estructura)
- [Configurations](#configurations)

## Install
Install with [npm](https://www.npmjs.com/):

```bash
npm install --save copy
```

Init proyect:

```bash
npm init -y
```

Install TypeScript:

```bash
npm install -g typescript
```

Init TypeScript:

```bash
tsc --init
```

If you use Windows and it generates an error, follow these steps

```bash
Get-ExecutionPolicy -list
```
```bash
Set-ExecutionPolicy -Scope CurrentUser unrestricted
```

And try again

```bash
tsc --init
```

## Dependences
Install Node for TypeScript
```bash
npm install -g ts-node
```

Install Express
```bash
npm install express
```
```bash
npm install @types/express
```

Install Nodemon
```bash
npm i nodemon
```

Install Dotenv
```bash
npm i dotenv
```

Install [Apidoc](https://www.npmjs.com/package/apidoc/v/0.28.1)
```bash
npm i apidoc@0.28.1
```

## Estructura
Create principal folder
```bash
mkdir src
```

Create build folder
```bash
mkdir build
```

Into [src](src) folder create app
```bash
touch app.ts
```
Into [app](src/app.ts) paste the following code
```ts
import express from "express";
import config from "./config/config";

const app = express();
app.set('port', config.BACKEND_PORT || 4002);

//Routes

const port = app.get('port');
app.listen(port,  () => console.log(`Server listen on port ${port}`));
```

Into [src](src) folder create many folders
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

Into [config](src/config) folder create config file
```bash
touch config.ts
```

Into [config](src/config/config.ts) paste the following code
```ts
import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    //variable: process.env.related variable
}
``` 

Into [response](src/response/) folder create response files
```bash
touch BaseResponse.ts
```
```bash
touch ResponseError.ts
```

Into [BaseResponse](src/response/BaseResponse.ts) paste the following code
```ts
export default class BaseResponse {
    success: Boolean;
    message: String;
    description: String;
    data: Object;

    constructor(message: String, description: String, data: Object) {
        this.success = true;
        this.message = message;
        this.description = description;
        this.data = data;
    }
}
```

Into [ResponseError](src/response/ResponseError.ts) paste the following code
```ts
export default class ResponseError {
    success: Boolean;
    message: String;
    description: String;

    constructor(message: String, description: String) {
        this.success = false;
        this.message = message;
        this.description = description;
    }
}
```

## Configurations
Create file .gitignore
```.gitignore
.env
node_modules/*
```

Into [package.json](package.json#L5), modify main
```json
"main": "src/app.ts",
```

Into [package.json](package.json#L7), create a new script after test
```json
"start": "nodemon",
"buildDoc": "apidoc -i src/api/routes/ -o ./apidoc -t ./apidoc/template",
"clearCache": "git rm -r --cached node_modules",
"clearModules": "git commit -m 'removing node_modules'"
```

Into [tsconfig.json](tsconfig.json#L29) find `rootDir`, usually line 29
```json
"rootDir": "./src",
```

Into [tsconfig.json](tsconfig.json#L52) find `outDir`, usually line 52
```json
"outDir": "./dist",
```