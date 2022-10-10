## TypeScript Guide
[![Release](https://img.shields.io/badge/Platform-TypeScript-blue)]()
[![Language](https://img.shields.io/badge/Languaje-NodeJS-brightgreen)]()
[![Language](https://img.shields.io/badge/Command-npm-lightgrey)]()

Create BaseResponse.ts file
```bash
touch BaseResponse.ts
```

Into [BaseResponse.ts](BaseResponse.ts) paste the following code
```ts
export default class BaseResponse {
    private success?: Boolean;

    constructor(private message?: String, 
                private description?: String, 
                private data?: Object) {
        this.success = true;
        this.message = message;
        this.description = description;
        this.data = data;
    }
}
```
Create BaseResponse.ts file
```bash
touch ResponseError.ts
```

Into [ResponseError.ts](ResponseError.ts) paste the following code
```ts
export default class ResponseError {
    private success?: Boolean;
    
    constructor(private message?: String, 
                private description?: String) {
        this.success = false;
        this.message = message;
        this.description = description;
    }
}
```

Go to [src](../) to continue

***
[![Powered by](https://img.shields.io/badge/Powered%20by-Eduardo%20Salas-blue)]()
***