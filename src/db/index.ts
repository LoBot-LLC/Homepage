import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

// Lazily create the pool on first DB access so module import does not
// throw when DATABASE_URL is unavailable at build time (e.g. Vercel build).
let pool: Pool | null = null;
let dbInstance: ReturnType<typeof drizzle> | null = null;

export function getDb(): ReturnType<typeof drizzle> {
  if (!dbInstance) {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error("DATABASE_URL is required");
    }
    pool = new Pool({ connectionString: databaseUrl });
    if (process.env.NODE_ENV !== "production") {
      globalForDb.__arenaNextJsPostgresqlPool = pool;
    }
    dbInstance = drizzle(pool);
  }
  return dbInstance;
}