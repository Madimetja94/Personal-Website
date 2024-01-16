const { pool } = require("./config/config");

async function createTable() {
  sendQuery(
    "CREATE TABLE IF NOT EXISTS contacts(id SERIAL PRIMARY KEY, name varchar, email varchar, message varchar)"
  );
}

async function sendQuery(sqlQuery, value) {
  const results = value
    ? await pool.query(sqlQuery, value)
    : await pool.query(sqlQuery);
  return results.rows;
}

createTable().then(() => console.log("table created"));
