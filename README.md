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
npm i --save copy
```

Init proyect:

```bash
npm init -y
```

Install TypeScript:

```bash
npm i -g typescript
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
npm i -g ts-node
```

Install Express
```bash
npm i express
```
```bash
npm i @types/express
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
Go to [src](src) folder

## Configurations
Create file .gitignore
```bash
touch .gitignore
```

Into [.gitignore](.gitignore) paste the following code
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

Run app
```bash
npm start
```