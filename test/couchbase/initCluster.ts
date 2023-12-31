import { execSync } from "node:child_process";
import { env } from "../../src/env/index.js";

// This script need a running Docker Couchbase instance

const initClusterCommand = 
`couchbase-cli cluster-init \
    --services data,index,query,fts,eventing,analytics,backup \
    --cluster-username ${env.COUCHBASE_USER} \
    --cluster-password ${env.COUCHBASE_PASSWORD} \
    --cluster-name ${env.COUCHBASE_CLUSTER}`

const dockerExec = `docker exec ${env.DOCKER_COUCHBASE_INSTANCE} bash -c '${initClusterCommand}'`;

console.log(`$ ${dockerExec}\n`);

execSync(dockerExec, {stdio: 'inherit'});

console.log("Cluster initiated.\n");
