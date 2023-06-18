import { execSync } from "node:child_process";
import { env } from "../../src/env/index.js";

// This script need a running Docker Couchbase instance

const initBucketCommand = 
`couchbase-cli bucket-create \
    --cluster 127.0.0.1:8091 \
    --bucket-type couchbase \
    --bucket-ramsize 200 \
    --username ${env.COUCHBASE_USER} \
    --password ${env.COUCHBASE_PASSWORD} \
    --bucket mpg`

const dockerExec = `docker exec ${env.DOCKER_COUCHBASE_INSTANCE} bash -c '${initBucketCommand}'`;

console.log(`$ ${dockerExec}\n`);

execSync(dockerExec, {stdio: "pipe"});

console.log("Bucket initiated.\n");
