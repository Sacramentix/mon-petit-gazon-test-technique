import { test, beforeEach } from 'node:test';
import {strict as assert} from "node:assert";
import { flush } from '../couchbase/flushBucket.js';
import { load } from '../couchbase/loadSampleData.js';
import { createLeague, getLeagueUsers } from '../../src/models/league/index.js';
import { couchCluster } from '../../src/services/couchbase/mpg.js';
import { updateTeam } from '../../src/models/team/index.js';
import { QueryScanConsistency } from "couchbase";
import { setTimeout } from "node:timers/promises";

beforeEach(async () => {
    flush();
    await load();
})

test("Get all users from a league", async () => {
    console.log("test");
    assert.deepEqual(
        await getLeagueUsers("mpg_league_1"),
        [ { name: 'Greg' }, { name: 'Theo' } ]
    )
});

test("Create League", async () => {
    const oldBucket = await getBucket();

    const testLeague = {
        adminId: "user_test",
        description: "test description",
        id: "mpg_league_test",
        name: "test name"
    };
    await createLeague(testLeague);

    oldBucket.push({
        ...testLeague,
        type: "mpg_league"
    });

    const newBucket = await getBucket();
    newBucket.sort(byId)
    oldBucket.sort(byId)
    assert.deepEqual(newBucket, oldBucket);

});

test("Update team", async () => {
    const oldBucket = await getBucket();

    const testTeam= {
        id: "mpg_team_1_1",
        name: "la team de test"
    };
    await updateTeam(testTeam);

    const i = oldBucket.findIndex(e=>e.id == testTeam.id);
    oldBucket[i] = {
        ...testTeam,
        type: "mpg_team"
    };

    const newBucket = await getBucket();
    newBucket.sort(byId)
    oldBucket.sort(byId)
    assert.deepEqual(newBucket, oldBucket);

});


/**
 * Get All data in a bucket
 * @returns an array with all document
 */
async function getBucket() {
    console.log("Wait 5s\n");
    // It seems that couchbase change are not instant at all even with QueryScanConsistency.RequestPlus
    await setTimeout(5000);
    return couchCluster.query(/*sql*/`SELECT mpg.* FROM mpg`, { scanConsistency: QueryScanConsistency.RequestPlus }).then(r=>r.rows);
}

/**
 * Sort by id
 */
function byId(a:{id:string}, b:{id:string}) {
    return a.id?.localeCompare(b.id);
}
