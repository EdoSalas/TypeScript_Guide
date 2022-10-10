## TypeScript Guide
[![Release](https://img.shields.io/badge/Platform-TypeScript-blue)]()
[![Language](https://img.shields.io/badge/Languaje-NodeJS-brightgreen)]()
[![Language](https://img.shields.io/badge/Command-npm-lightgrey)]()

Create BaseResponse.ts file
```bash
touch BaseResponse.ts
```

Into [BaseResponse.ts](src/response/BaseResponse.ts) paste the following code
```ts
export default class BaseResponse {
    success: Boolean;
    message: String;
    description: String;
    data: Object;

    constructor(message: String, description: String, data: Object) {
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

Into [ResponseError.ts](src/response/ResponseError.ts) paste the following code
```ts
export default class ResponseError {
    success: Boolean;
    message: String;
    description: String;

    constructor(message: String, description: String) {
        this.success = false;
        this.message = message;
        this.description = description;
    }
}
```

Go to [src](../)