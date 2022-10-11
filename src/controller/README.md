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
}
``` 

Go to [src](../) to continue

***
[![Powered by](https://img.shields.io/badge/Powered%20by-Eduardo%20Salas-blue)]()
***