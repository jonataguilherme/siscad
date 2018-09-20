var express = require('express');
var app = express(); 

app.set('view engine', 'ejs');
app.use(express.static('views'));


pool = require('./connection');

var disciplina = {
    "post" : function(req, res) {
        code = req.body.code;
        discipline = req.body.discipline;
        hour = req.body.hour;
            pool.getConnection(function (err, connection) {
            console.log("Conexão realizada com sucesso");
            var sql = "INSERT INTO disciplina (cod, disciplina, carg_hora) VALUES ('"+code+"', '"+discipline+"', '"+hour+"')";
            connection.query(sql, function (err, result) {
                connection.release();
                if (err) throw err;
                console.log("1 record inserted");
                res.redirect("http://localhost:8081/Disciplina");
            });
        });
     },
    "get" : function(req, res) {
            pool.getConnection(function (err, connection) {
            console.log("Conexão realizada com sucesso");
            var sql = "Select *FROM disciplina";
            connection.query(sql, function (err, result) {
                connection.release();
                if (err) throw err;
                console.log(result);
                results = {disciplinas: result};
                res.render("cadDisciplina" , results);
            });
        });
    }
}
module.exports=disciplina;
