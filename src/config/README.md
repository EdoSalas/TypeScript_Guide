Into [config](src/config) folder create config file
```bash
touch config.ts
```

Into [config](src/config/config.ts) paste the following code
```ts
import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    //variable: process.env.related variable
}
``` 