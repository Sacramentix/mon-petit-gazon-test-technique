import { type Request, type Response, json, type Express } from "express";
import { z } from "zod";
import { zparseWithError } from "../../utils/zodErrorHandler.js";
import { updateTeam } from "../../models/team/index.js";


export function addTeamRoutes(app:Express) {
  // We need a json body parser for those route
  app.patch("/team", json(), updateTeamRoute);
}


/** PATCH | /league | createLeague  **/

const updateTeamSchema = z.object({
  body: z.object({
    id: z.string().nonempty(),
    name: z.string().nonempty(),
  }).required(),
});

async function updateTeamRoute(req:Request, res:Response) {
  const { body: team } = zparseWithError(updateTeamSchema, req, res);
  return res.send(await updateTeam(team));
}
