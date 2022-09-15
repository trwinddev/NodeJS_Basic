// get the client
// const mysql = require("mysql2");
// const mysql = require('mysql2/promise');
import mysql from "mysql2/promise";

// create the connection to database
console.log("Creating connection pool...");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "nodejsbasic",
});
// const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test'});
// simple query

export default pool;

// with placeholder
// connection.query(
//   "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
//   ["Page", 45],
//   function (err, results) {
//     console.log(results);
//   }
// );
