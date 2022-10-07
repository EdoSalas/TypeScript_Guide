import express from "express";
import config from "./config/config";

const app = express();
app.set('port', config.BACKEND_PORT || 4002);

//Routes

const port = app.get('port');
app.listen(port,  () => console.log(`Server listen on port: ${port}`));