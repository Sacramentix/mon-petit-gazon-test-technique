import { execSync } from "node:child_process";
import { env } from "../../src/env/index.js";
import { z } from "zod";

// All the exposed port arguments Couchbase need
const portArgs = "-p 8091-8097:8091-8097 -p 9123:9123 -p 11207:11207 -p 11210:11210 -p 11280:11280 -p 18091-18097:18091-18097";

// The command to create a new Docker Couchbase instance
const dockerRun = `docker run -d --name ${env.DOCKER_COUCHBASE_INSTANCE} ${portArgs} couchbase`;

console.log(`$ ${dockerRun}\n`);

execSync(dockerRun, {stdio: 'inherit'});

console.log("Docker Couchbase instance initiated.\n");