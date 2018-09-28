var express = require('express');
var app = express(); 

app.set('view engine', 'ejs');
app.use(express.static('views'));

pool = require('./connection');


var turma = {
  post: function(req, res) {
    var turma = req.body.turnome;
    var disciplina = req.body.discipline1;
    var hora = req.body.hour0;
    var dia = req.body.day0;
    var professor = req.body.professorid1;
    pool.getConnection(function (err, connection) {
      console.log("Conexão realizada com sucesso");
      var sql = "insert into turma values(null, '"+dia+"', '"+hora+"' ,'"+turma+"', '"+professor+"' , '"+disciplina+"') ";
      connection.query(sql, function (err, result) {
        connection.release();
        if (err) throw err;
        console.log(result);
        results = {disciplinas: result};
        // res.render("cadTurma", results);
        //this.get(req, res);
      });
    });
  },
  get : function(req, res) {
    pool.getConnection(function (err, connection) {
      console.log("Conexão realizada com sucesso");
      var sql = "Select disciplina, cod  FROM disciplina";
      connection.query(sql, function (err, result) {
          connection.release();
          if (err) throw err;
          console.log(result);
          results = {disciplinas: result};
          res.render("cadTurma", results);
        });
  });
  }
}
module.exports=turma;