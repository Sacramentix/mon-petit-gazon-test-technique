import { exec } from "node:child_process";
import { env } from "../../src/env/index.js";

// This script need a running Docker Couchbase instance

const flushBucketCommand = 
`couchbase-cli bucket-flush \
    --username ${env.COUCHBASE_USER} \
    --password ${env.COUCHBASE_PASSWORD} \
    --bucket mpg`

const dockerExec = `docker exec ${env.DOCKER_COUCHBASE_INSTANCE} bash -c '${flushBucketCommand}'`;

await exec(dockerExec, (e, stdout, stderr) => {
    process.stdout.write(stdout);
    process.stderr.write(stderr);
})

