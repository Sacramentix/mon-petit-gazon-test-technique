import { couchCluster } from "../../src/services/couchbase/mpg.js";

await couchCluster.query(/*sql*/`CREATE PRIMARY INDEX "idx_mpg_1" ON "mpg"`);

await couchCluster.query(/*sql*/`
    INSERT INTO mpg
    VALUES
    ('user_1', { 'id': 'user_1', 'type': 'user', 'name': 'Greg' }),
    ('user_2', { 'id': 'user_2', 'type': 'user', 'name': 'Ben' }),
    ('user_3', { 'id': 'user_3', 'type': 'user', 'name': 'Theo' }),
    ('user_4', { 'id': 'user_4', 'type': 'user', 'name': 'Max' }),
    ('mpg_league_1', { 'id': 'mpg_league_1', 'type': 'mpg_league', 'adminId': 'user_1', 'name': 'la ligue 1', 'description': 'super', 'usersTeams': { 'user_1': 'mpg_team_1_1', 'user_3': 'mpg_team_1_2' } }),
    ('mpg_league_2', { 'id': 'mpg_league_2', 'type': 'mpg_league', 'adminId': 'user_2', 'name': 'la ligue deux', 'description': 'top' }),
    ('mpg_league_3', { 'id': 'mpg_league_3', 'type': 'mpg_league', 'adminId': 'user_3', 'name': 'la ligue 3', 'description': 'ouais', 'usersTeams': {} }),
    ('mpg_team_1_1', { 'id': 'mpg_team_1_1', 'type': 'mpg_team', 'name': 'la team de Greg' }),
    ('mpg_team_1_2', { 'id': 'mpg_team_1_2', 'type': 'mpg_team', 'name': 'la team de Theo' })
`);
