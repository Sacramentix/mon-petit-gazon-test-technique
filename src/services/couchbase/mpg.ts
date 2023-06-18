import { connect } from "couchbase";
import { env } from "../../env/index.js";

export const couchCluster = await connect(env.COUCHBASE_URL, {
    username: env.COUCHBASE_USER,
    password: env.COUCHBASE_PASSWORD
});
