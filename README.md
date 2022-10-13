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
- [DataBase](#database)
- [Run](#run)

## Install
Install with [npm](https://www.npmjs.com/):

```bash
npm i --save copy
```

Init proyect:

```bash
npm init -y
```

Install TypeScript:

```bash
npm i -g typescript --save
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
npm i -g ts-node --save
```

Install Express
```bash
npm i express --save
```
```bash
npm i @types/express --save-dev
```

Install Nodemon
```bash
npm i nodemon --save
```

Install Dotenv
```bash
npm i dotenv --save
```

Install [Apidoc](https://www.npmjs.com/package/apidoc/v/0.28.1)
```bash
npm i apidoc@0.28.1 --save
```

Install [TypeORM](https://typeorm.io)
```bash
npm i typeorm --save
```
```bash
npm i class-transformer --save
```
```bash
npm i reflect-metadata --save
```
```bash
npm i @types/node --save-dev
```

In this case install postgresql connection
```bash
npm i pg --save
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

Go to [src](src) folder

## Configurations
Create file .env
```bash
touch .env
```

Into .env file, you can configure any global variable, this file not push in git for security. Example:
```env
PORT = 4001
```

Create file .gitignore
```bash
touch .gitignore
```

Into [.gitignore](.gitignore) paste the following code
```gitignore
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


## DataBase
Create docker folder for create a database
```bash
mkdir docker
```

Go to [docker](docker) folder

Into [tsconfig.json](tsconfig.json#L17) find `experimentalDecorators`, usually line 17 and discomment this line
```json
"experimentalDecorators": true,
```

Into [tsconfig.json](tsconfig.json#L18) find `emitDecoratorMetadata`, usually line 18 and discomment this line
```json
"emitDecoratorMetadata": true,
```

## Run
Run app
```bash
npm start
```

For generate Documentation use
```bash
npm run buildDoc
```

To see Documentation generated open [index.html](/apidoc/index.html) file in your browser

***
[![Powered by](https://img.shields.io/badge/Powered%20by-Eduardo%20Salas-blue)]()
***