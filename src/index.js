import app from "./app";
import config from "./config";

app.listen(+config.port);

console.log("server on port", +config.port);
