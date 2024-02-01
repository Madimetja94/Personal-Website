require("dotenv").config();
const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.POSTGRES_USER || "postgres",
  host: process.env.HOST || "localhost",
  database: process.env.POSTGRES_DB || "postgres",
  password:"1234567",
  port: process.env.POSTGRES_PORT|| 5432,
});
module.exports = { pool };
