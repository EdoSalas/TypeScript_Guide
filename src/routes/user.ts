import { Router } from "express";
import UserController from "../controller/user";
import UserModel from "../model/user";
import BaseResponse from "../response/BaseResponse";
import ResponseError from "../response/ResponseError";
import http from "../model/enums/http";

const router = Router();
const userCtrl = new UserController();

/**
 * @api {get} /api/users/
 * @apiVersion 1.0.0
 * @apiGroup User
 * @apiDescription Obtain all users
 * @apiExample {curl} Example usage:
 *      curl -i http://localhost:4041/api/users/
 * @apiSuccess {Number} id Id of the User.
 * @apiSuccess {String} name Name of the User.
 * @apiSuccess {Date} dof Date of birth of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {Number} status Status of the User.
 * @apiSuccessExample {json} Success-Response:
 *      HTTP/1.1 200 OK
 *      [
 *          {
 *              "id": 1,
 *              "name": Eduardo Salas,
 *              "dof": 12/12/1995,
 *              "email": esalas95@outlook.com
 *              "status": 1
 *          }
 *      ]
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
