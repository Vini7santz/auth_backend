import { Pool } from "pg";

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://livraria_auth_user:eAO9NT19UINIFqu5V1BM4WRObwYyiuYs@dpg-ct7l3ld6l47c73cr7670-a.oregon-postgres.render.com/livraria_auth";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;
