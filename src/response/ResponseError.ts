export default class ResponseError {
    private success?: Boolean;
    
    constructor(private code?: Number,
                private message?: String, 
                private description?: String) {
        this.success = false;
        this.code = code;
        this.message = message;
        this.description = description;

        console.log(`☠️❗ An error occurred ☠️❗\nCode: ${code}\nMessage: ${message}\nDescription: ${description}`);
    }
}