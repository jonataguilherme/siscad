var express = require('express');
var app = express(); 

app.set('view engine', 'ejs');
app.use(express.static('views'));


connection = require('./connection');

var disciplina = {
    "post" : function(req, res) {
        code = req.body.code;
        discipline = req.body.discipline;
        hour = req.body.hour;
        connection.connect(function(err) {
          if (err) {
            console.log("Erro" + err);
            return;
          }
          else{
            console.log("Conexão realizada com sucesso");
            var sql = "INSERT INTO disciplina (cod, disciplina, carg_hora) VALUES ('"+code+"', '"+discipline+"', '"+hour+"')";
            connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });
          }
        });
     },
    "get" : function(req, res) {
        connection.connect(function(err) {
        if (err) {
            console.log("Erro" + err);
            return;
        }
        else{
            console.log("Conexão realizada com sucesso");
            var sql = "Select *FROM disciplina";
            connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                results = {disciplinas: result};
                res.render("cadDisciplina" , results);
            });
        }
        });
    }
}
module.exports=disciplina;
