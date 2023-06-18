import { env } from "./env/index.js";
import { addRoutes } from "./routes/index.js";
import express from "express";

const app = express();

addRoutes(app);

app.listen(env.EXPRESS_PORT , () => {
    console.log(`Listening on port ${env.EXPRESS_PORT}...`);
});
