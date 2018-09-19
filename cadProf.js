express = require('express');
app = express(); 
connection = require('./connection');
connection.connect(function(err) {
  if (err) {
    console.log("Erro" + err);
    return;
  }
  else{
    console.log("Conexão realizada com sucesso");
  }
});