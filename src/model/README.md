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
import status from "./enums/status";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    id?: Number;

    @Column({ type: "varchar", nullable: false })
    name?: String;

    @Column({ type: "date", nullable: false })
    date_of_birth?: Date;

    @Column({ type: "varchar", nullable: false })
    email?: String;

    @Column({ type: "integer", enum: status, default: status.ACTIVE})
    status?: Number;

}
``` 

Go to [src](../) to continue

***
[![Powered by](https://img.shields.io/badge/Powered%20by-Eduardo%20Salas-blue)]()
***