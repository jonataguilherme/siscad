var express = require('express');
var app = express(); 

app.set('view engine', 'ejs');
app.use(express.static('views'));


pool = require('./connection');

var professor = {
    "post" : function(req, res) {
        prof = req.body.prof;
        email = req.body.email;
        discipline = req.body.discipline;
        
        segundaday1 = req.body.segundaday1;
        tercaday2 = req.body.tercaday2;
        quartaday3 = req.body.quartaday3;
        quintaday4 = req.body.quintaday4;
        sextaday5 = req.body.sextaday5;

        segunda1 = req.body.segunda1 || 0;
        segunda2 = req.body.segunda2 || 0;
        segunda3 = req.body.segunda3 || 0;
        segunda4 = req.body.segunda4 || 0;

        terca1 = req.body.terca1 || 0;
        terca2 = req.body.terca2 || 0;
        terca3 = req.body.terca3 || 0;
        terca4 = req.body.terca4 || 0;

        quarta1 = req.body.quarta1 || 0;
        quarta2 = req.body.quarta2 || 0;
        quarta3 = req.body.quarta3 || 0;
        quarta4 = req.body.quarta4 || 0;

        quinta1 = req.body.quinta1 || 0;
        quinta2 = req.body.quinta2 || 0;
        quinta3 = req.body.quinta3 || 0;
        quinta4 = req.body.quinta4 || 0;

        sexta1 = req.body.sexta1 || 0;
        sexta2 = req.body.sexta2 || 0;
        sexta3 = req.body.sexta3 || 0;
        sexta4 = req.body.sexta4 || 0;
        
        console.log("Passei aqui1");
        console.log(req.body);
        

        var sql = "";
        if(segundaday1 == 1){
              sql = "INSERT INTO professor (email, nome, disciplina, dia, hora1, hora2, hora3, hora4) VALUES ('"+email+"', '"+prof+"' , '"+discipline+"',"+segundaday1+","+segunda1+","+segunda2+","+segunda3+","+segunda4+"); ";
              salvarprof(sql);
        }

        if(tercaday2 == 2){
          sql = "INSERT INTO professor (email, nome, disciplina, dia, hora1, hora2, hora3, hora4) VALUES ('"+email+"', '"+prof+"', '"+discipline+"', "+tercaday2+","+terca1+","+terca2+","+terca3+","+terca4+"); ";
          salvarprof(sql);
        }

        if(quartaday3 == 3){
          sql = "INSERT INTO professor (email, nome, disciplina, dia, hora1, hora2, hora3, hora4) VALUES ('"+email+"', '"+prof+"', '"+discipline+"', "+quartaday3+","+quarta1+","+quarta2+","+quarta3+","+quarta4+"); ";
          salvarprof(sql);
        }

        if(quintaday4 == 4){
          sql = "INSERT INTO professor (email, nome, disciplina, dia, hora1, hora2, hora3, hora4) VALUES ('"+email+"', '"+prof+"', '"+discipline+"', "+quintaday4+","+quinta1+","+quinta2+","+quinta3+","+quinta4+"); ";
          salvarprof(sql);
        }

        if(sextaday5 == 5){
          sql = "INSERT INTO professor (email, nome, disciplina, dia, hora1, hora2, hora3, hora4) VALUES ('"+email+"', '"+prof+"', '"+discipline+"', "+sextaday5+","+sexta1+","+sexta2+","+sexta3+","+sexta4+"); ";
          salvarprof(sql);
        }
        res.redirect("http://localhost:8081/Professor");
    },
    "get" : function(req, res) {
        pool.getConnection(function (err, connection) {
          console.log("Conexão realizada com sucesso");
          var sql = "Select disciplina, cod  FROM disciplina";
          connection.query(sql, function (err, result) {
              connection.release();
              if (err) throw err;
              console.log(result);
              results = {disciplinas: result};
              res.render("cadProf", results);
            });
      });
    }
}
function salvarprof(sql){
  console.log(sql);

        if(sql){
          pool.getConnection(function (err, connection) {
          console.log("Conexão realizada com sucesso");
              connection.query(sql, function (err, result) {
                connection.release();
                if (err) throw err;
                console.log("1 record inserted");
              });              
          });
        }
}
module.exports=professor;