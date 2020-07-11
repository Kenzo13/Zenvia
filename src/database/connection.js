const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'docker',
  database: 'zenvia'
});

connection.connect(async function(err){
  if (err){
    console.log('Connection with database fail.');
  }
  else {
    console.log('Connection with database successfull');
  }
});

module.exports = connection;