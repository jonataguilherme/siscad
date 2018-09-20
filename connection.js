var mysql = require('mysql');
var connection = mysql.createConnection({
  connectionLimit : 10, 
  host     : 'localhost',
  user     : 'siscad',
  password : '@2018inf',
  database : 'siscdad',
  port     : 3306,
  charset  : 'utf8'
});

var pool        = mysql.createPool({
  connectionLimit : 10, // default = 10
  host            : 'localhost',
  user            : 'siscad',
  password        : '@2018inf',
  database : 'siscdad',
  port     : 3306,
  charset  : 'utf8'
});

module.exports=pool;
//module.exports=pool
