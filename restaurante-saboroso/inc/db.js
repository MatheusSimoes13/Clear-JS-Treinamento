const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'user',
  database: 'saboroso',
  password: '123456',
  multipleStatements: true
});

module.exports = connection;