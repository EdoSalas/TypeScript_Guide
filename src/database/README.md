## TypeScript Guide
[![Release](https://img.shields.io/badge/Platform-TypeScript-blue)]()
[![Language](https://img.shields.io/badge/Languaje-NodeJS-brightgreen)]()
[![Language](https://img.shields.io/badge/Command-npm-lightgrey)]()

Create pgConnector.ts file
```bash
touch pgConnector.ts
```

Into [pgConnector.ts](pgConnector.ts) paste the following code
```ts
import { DataSource } from "typeorm";
import config from "../config/config";
// Import All models

const pgConnector = new DataSource({
    type: "postgres",
    url: config.DATABASE_URI,
    synchronize: true,
    entities: [
        // List of all models
    ]
});

export default pgConnector;
``` 

Go to [src](../) to continue

***
[![Powered by](https://img.shields.io/badge/Powered%20by-Eduardo%20Salas-blue)]()
***