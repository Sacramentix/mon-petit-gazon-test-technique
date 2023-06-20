import { couchCluster } from "../../services/couchbase/mpg.js";
import type { Team } from "./type.js";

/**
 * @param team The team with id and the futur name
 */
export function updateTeam(team:Team) {
    return couchCluster.query(/*sql*/`
        UPDATE mpg
        USE KEYS $ID
        SET name = $NAME
    `,{
        parameters: {
            ID: team.id,
            NAME: team.name
        }
    }).then(r=>r.rows);
}
