var express = require('express');
var app = express(); 
var disciplina = require('./cadDisciplina');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/Disciplina', function(req, res) {
    disciplina.get(req, res);
    //res.render('cadDisciplina');
});

app.post('/Disciplina', function(req, res) {
    disciplina.post(req, res);
});

app.get('/Turma', function(req, res) {
    res.render('cadTurma');
});
app.get('/Professor', function(req, res) {
    res.render('cadProf');
});

app.listen(8081, function(){
    console.log('Conectado na porta 8081');
});