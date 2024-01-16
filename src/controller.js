const { pool } = require("./config/config");

async function createTable() {
  sendQuery(
    "CREATE TABLE IF NOT EXISTS contacts(id SERIAL PRIMARY KEY, name varchar, email varchar, message varchar)"
  );
}

async function insertContacts(name, email, message){
    const queryString = "INSERT INTO contacts(name, email, message) VALUES($1,$2,$3) RETURNING *";
    const values = [name, email, message];
    return await sendQuery(queryString, values);
}

async function sendQuery(sqlQuery, value) {
  const results = value
    ? await pool.query(sqlQuery, value)
    : await pool.query(sqlQuery);
  return results.rows;
}

//createTable().then(() => console.log("table created"));
insertContacts('Madimetja Movundlela', 'fmvundlela@gmail.com', 'We would to finally meet you.').then((results)=>{console.log(results)})
