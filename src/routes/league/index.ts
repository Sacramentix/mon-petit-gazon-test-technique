import { type Request, type Response, json, type Express } from "express";
import { createLeague, getLeagueUsers } from "../../models/league/index.js";
import { z } from "zod";
import { zparseWithError } from "../../utils/zodErrorHandler.js";


export function addLeagueRoutes(app:Express) {
  app.get("/league/:league_id/users", getLeagueUsersRoute);
  // We need a json body parser for those route
  app.post("/league", json(), createLeagueRoute);
}

/** GET | /league/:league_id/users | getUserOfLeague  **/

const getUserOfLeagueSchema = z.object({
    params: z.object({
      league_id: z.string().nonempty(),
    }),
});

async function getLeagueUsersRoute(req:Request, res:Response) {
    const { params: { league_id } } = zparseWithError(getUserOfLeagueSchema, req, res);
    return res.send({ users: await getLeagueUsers(league_id) });
}

/** POST | /league | createLeague  **/

const createLeagueSchema = z.object({
    body: z.object({
      id: z.string().nonempty(),
      name: z.string().nonempty(),
      description: z.string().nonempty(),
      adminId: z.string().nonempty(),
    }).required(),
});

async function createLeagueRoute(req:Request, res:Response) {
    const { body: league } = zparseWithError(createLeagueSchema, req, res);
    const result = await createLeague(league);
    return res.status(201).send(result);
}
