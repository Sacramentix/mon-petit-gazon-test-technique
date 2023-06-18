import { execSync } from "node:child_process";
import { env } from "../../src/env/index.js";

// This script need a running Docker Couchbase instance

const initClusterCommand = 
`couchbase-cli cluster-init \
    --cluster-username ${env.COUCHBASE_USER} \
    --cluster-password ${env.COUCHBASE_PASSWORD} \
    --cluster-name ${env.COUCHBASE_CLUSTER}`

const dockerExec = `docker exec ${env.DOCKER_COUCHBASE_INSTANCE} bash -c '${initClusterCommand}'`;

console.log(`$ ${dockerExec}\n`);

execSync(dockerExec, {stdio: "pipe"});

console.log("Cluster initiated.\n");
