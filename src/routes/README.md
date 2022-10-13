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

/**
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiName Get All Users
 * @api {get} /api/users/
 * @apiDescription Obtain all users
 * @apiExample {json} Example usage:
 * {
 *      http://localhost:4001/api/users/
 * }
 * @apiSampleRequest http://localhost:4041/api/users/
 * @apiSuccess {Number} id Id of the User.
 * @apiSuccess {String} name Name of the User.
 * @apiSuccess {Date} dof Date of birth of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {Number} status Status of the User.
 * @apiSuccessExample {json} Success-Response:
 * [
 *      {
 *          "id": 1,
 *          "name": Eduardo Salas,
 *          "dof": 12/12/1995,
 *          "email": esalas95@outlook.com
 *          "status": 1
 *      }
 * ]
 */
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

For more endpoint documentation visit [Apidoc page](https://apidocjs.com/)

Go to [src](../) to continue

***
[![Powered by](https://img.shields.io/badge/Powered%20by-Eduardo%20Salas-blue)]()
***