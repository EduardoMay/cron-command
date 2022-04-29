import app from "./app";
import config from "./config";

app.listen(app.get(`port`));

console.log("server on port", config.port);
