## TypeScript Guide
[![Release](https://img.shields.io/badge/Platform-TypeScript-blue)]()
[![Language](https://img.shields.io/badge/Languaje-NodeJS-brightgreen)]()
[![Language](https://img.shields.io/badge/Command-npm-lightgrey)]()

Create enums folder
```bash
mkdir enums
```

Go to [enums](enums) folder

Create user.ts file
```bash
touch user.ts
```

Into [user.ts](user.ts) paste the following code
```ts
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { Expose } from "class-transformer";
import status from "./enums/status";

@Entity()
export default class User {
    @PrimaryGeneratedColumn({ name: "pk_user"})
    @Expose()
    id?: number;

    @Column({ name: "name", type: "varchar", nullable: false })
    @Expose()
    name?: string;

    @Column({ name: "date_of_birth", type: "date", nullable: false })
    @Expose()
    dof?: Date;

    @Column({ name: "email", type: "varchar", nullable: false })
    @Expose()
    email?: string;

    @Column({ name: "status", type: "integer", enum: status, default: status.ACTIVE})
    @Expose()
    status?: number;
}
``` 

Go to [src](../) to continue

***
[![Powered by](https://img.shields.io/badge/Powered%20by-Eduardo%20Salas-blue)]()
***