// We use this package in order to pass async error to the errorHandler function
import 'express-async-errors';
import { type Express } from "express";
import { addLeagueRoutes } from "./league/index.js";
import { addTeamRoutes } from './team/index.js';
import { errorHandler } from './errorHandler.js';

export function addRoutes(app:Express) {
    addLeagueRoutes(app);
    addTeamRoutes(app);
    app.get("/coffee", (req, res)=>res.sendStatus(418));
    app.use(errorHandler);
}