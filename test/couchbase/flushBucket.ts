import { couchCluster } from "../../src/services/couchbase/mpg.js";
import { QueryScanConsistency } from "couchbase";

// This script need a running Docker Couchbase instance
export async function flush() {

    await couchCluster.query(/*sql*/`
        DELETE FROM mpg
        WHERE true
    `, { scanConsistency: QueryScanConsistency.RequestPlus }).catch(e=>{});

    console.log("Bucket mpg flushed.\n");

}