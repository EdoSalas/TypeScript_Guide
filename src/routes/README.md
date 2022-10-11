## TypeScript Guide
[![Release](https://img.shields.io/badge/Platform-TypeScript-blue)]()
[![Language](https://img.shields.io/badge/Languaje-NodeJS-brightgreen)]()
[![Language](https://img.shields.io/badge/Command-npm-lightgrey)]()

Create user.ts file
```bash
touch user.ts
```

Into [user.ts](user.ts) paste the following code
```ts
import { Router } from "express";
import UserController from "../controller/user";
import UserModel from "../model/user";
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";
import http from "../model/enums/http";

const router = Router();
const userCtrl = new UserController();

router.get('/', async (req, res) => {
    try {
        return res.status(http.OK).json(new BaseResponse(
            "Usuarios obtenidos",
            "Se han obtenido los usuarios",
            await userCtrl.getAllUsers()
        ));
    } catch (error) {
        if (error instanceof ResponseError || error instanceof Error){
            return res.status(http.NOT_FOUND).json(Object.assign(error));
        }
        return res.status(http.INTERNAL_SERVER_ERROR).json(
            new ResponseError(
                http.INTERNAL_SERVER_ERROR,
                "Error",
                "Error obteniendo los usuarios"
            )
        )
    }
});

export default router;
``` 

Go to [src](../) to continue

***
[![Powered by](https://img.shields.io/badge/Powered%20by-Eduardo%20Salas-blue)]()
***