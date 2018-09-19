var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'siscad',
  password : '@2018inf',
  database : 'siscdad',
  port     : 3306,
  charset  : 'utf8'
});
module.exports=connection;