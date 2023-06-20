import { flush } from '../couchbase/flushBucket.js';
import { load } from '../couchbase/loadSampleData.js';

await flush();
await load();
