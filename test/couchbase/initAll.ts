import { setTimeout } from "node:timers/promises";

await import("./initDocker.js");

// We need to wait apparently couchbase instance don't accept connection instantly
console.log("Waiting 5s for couchbase to accept connection");
await setTimeout(5000);

await import("./initCluster.js");

await import("./initBucket.js");

console.log("Couchbase initiated.");