var mysql = require('mysql');

var connection = mysql.createConnection({
  user     : 'root',
  password : 'Economy57',
  database : 'movies'
});

connection.connect(function(err) {
  if (err) {
    console.log('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as ID ' + connection.threadId);
});

connection.query('SELECT 1' , function (error, results) {
  if (error) {
    throw error;
  }
});

module.exports.connection = connection;