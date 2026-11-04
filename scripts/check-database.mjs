import nextEnv from "@next/env";
import pg from "pg";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());
const connectionString = process.env.DATABASE_URL;
if (!connectionString)
  throw new Error("Invalid or missing environment variable: DATABASE_URL");

const pool = new pg.Pool({
  connectionString,
  max: 1,
  connectionTimeoutMillis: 5_000,
});
try {
  await pool.query("select 1");
  process.stdout.write("PostgreSQL connection OK\n");
} finally {
  await pool.end();
}
