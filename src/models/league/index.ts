import { couchCluster } from "../../services/couchbase/mpg.js";
import type { League } from "./type.js";

/**
 * @param league_id The league id we want to get users from
 * @returns an array of user object with name field
 * Note: The query don't fails when the league_id doesn't lead to any league
 * therefore when the league doesn't exist it return an empty array
 */
export function getLeagueUsers(league_id:string):Promise<{ name: string }[]> {
    return couchCluster.query(/*sql*/`
        SELECT name 
        FROM mpg
        USE KEYS 
        (SELECT OBJECT_NAMES(usersTeams) as users from mpg WHERE id=$league_id)[0].users
    `,{
        parameters: { league_id }
    }).then(r=>r.rows);
}



export type CreateLeague = League;

/**
 * @param league The league object we want to create
 */
export function createLeague(createLeague:CreateLeague) {
    return couchCluster.query(/*sql*/`
        INSERT INTO mpg
        VALUES
        ($league.id, $league)
    `,{
        parameters: {
            league: {
                ...createLeague,
                type: "mpg_league"
            }
        }
    }).then(r=>r.rows);
}
