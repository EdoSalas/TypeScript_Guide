export default class ResponseError {
    private success?: Boolean;
    
    constructor(private message?: String, 
                private description?: String) {
        this.success = false;
        this.message = message;
        this.description = description;

        console.log(`☠️❗ An error occurred ☠️❗\n${message}\n${description}`);
    }
}