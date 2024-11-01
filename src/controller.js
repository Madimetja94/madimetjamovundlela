const { pool } = require("./config/config");

async function createTable() {
  sendQuery(
    "CREATE TABLE IF NOT EXISTS contacts(id SERIAL PRIMARY KEY, name varchar, email varchar, message varchar)"
  );
}

async function insertContact(name, email, message){
    const queryString = "INSERT INTO contacts(name, email, message) VALUES($1,$2,$3) RETURNING *";
    const values = [name, email, message];
    return await sendQuery(queryString, values);
}

async function getAllContacts(){
  const queryString = "SELECT * FROM contacts";
  return await sendQuery(queryString);
}

async function sendQuery(sqlQuery, value) {
  const results = value
    ? await pool.query(sqlQuery, value)
    : await pool.query(sqlQuery);
  return results.rows;
}

module.exports = {insertContact ,getAllContacts,  createTable};