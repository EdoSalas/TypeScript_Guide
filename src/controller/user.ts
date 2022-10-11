import { Repository } from "typeorm";
import pgConnector from "../database/pgConnector";
import User from "../model/user";
import ResponseError from "../response/ResponseError";
import http from "../model/enums/http";
import status from "../model/enums/status";

export default class UserController {
    private readonly userModel: Repository<User>;

    constructor() {
        this.userModel = pgConnector.getRepository(User)
    }

    public async getAllUsers(): Promise<User[]> {
        try {
            const users = await this.userModel.find();
            if (!users || users.length == 0) throw new ResponseError(http.NOT_FOUND, "Users not found", "Database is Empty!");
            return users;
        } catch (error) {
            throw error;
        }
    }

    public async getActiveUsers(): Promise<User[]> {
        try {
            const users = await this.userModel.findBy({ status: status.ACTIVE });
            if (!users) throw new ResponseError(http.NOT_FOUND, "Users not found", "No users were found");
            return users;
        } catch (error) {
            throw error;
        }
    }

    public async getInactiveUsers(): Promise<User[]> {
        try {
            const users = await this.userModel.findBy({ status: status.INACTIVE });
            if (!users) throw new ResponseError(http.NOT_FOUND, "Users not found", "No users were found");
            return users;
        } catch (error) {
            throw error;
        }
    }

    public async getUserById(id: number):Promise<User> {
        try {
            const user = await this.userModel.findOneBy({ id: id});
            if (!user) throw new ResponseError(http.NOT_FOUND, "User not found");
            return user;
        } catch (error) {
            throw error;
        }
    }

    public async getUserByName(name: string):Promise<User> {
        try {
            const user = await this.userModel.findOneBy({ name: name, status: status.ACTIVE });
            if (!user) throw new ResponseError(http.NOT_FOUND, "User not found");
            return user;
        } catch (error) {
            throw error;
        }
    }

    public async save(user: User): Promise<boolean> {
        try {
            const isSaved = await this.userModel.save(user);
            if (!isSaved) throw new ResponseError(http.NOT_FOUND, "User not saved");
            return true;
        } catch (error) {
            throw error;
        }
    }
}