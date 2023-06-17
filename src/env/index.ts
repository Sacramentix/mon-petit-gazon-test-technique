import { config } from "dotenv";
import z, { ZodError } from "zod";
config();

const envSchema = z.object({
    PORT: z.coerce.number().optional().default(8080),
    COUCHBASE_URL: z.string().startsWith("couchbase://"),
    COUCHBASE_USER: z.string().nonempty(),
    COUCHBASE_PASSWORD: z.string().nonempty(),
    COUCHBASE_BUCKET: z.string().nonempty(),
}).catchall(z.string());


/**
 * We create an env object that must satisfie the schema above
 * We exit the process if env lack any field or have incorrect field
 * It print a nice message in the console to guide you
 * to fix those env error
 */
export const env = 
(() => {
    try {
        return envSchema.parse(process.env);
    } catch(error) {
        const e = error as unknown as ZodError;
        console.error(
            "Env config is incorrect: \n",
            e.errors.map(v=>` - ${v.path[0]} field ${v.message}`).join("\n"),
            "\nMake sure to fill the env with all the required fields."
        );
        process.exit(1);
    }
})();
