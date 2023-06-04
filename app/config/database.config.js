const mysql = require("mysql");

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});
connection.getConnection((error) => {
  if (error) throw error;
  console.log("Successfully connected to mysql server !!!");
});

module.exports = connection;
