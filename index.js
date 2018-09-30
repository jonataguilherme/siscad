var express = require('express');
var app = express(); 
var disciplina = require('./cadDisciplina');
var turma =require ('./cadTurma');
var professor = require('./cadProf');
var find = require ('./find');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('views'));

app.post ('/find', function(req, res){
    find.findDisciplina(req,res);

});

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/Desenvolvedores', function(req, res) {
    res.render('desenvolvedores');
});

app.get('/Sistema', function(req, res) {
    res.render('sistema');
});

app.get('/Manual', function(req, res) {
    res.render('Manual');
});

app.get('/Disciplina', function(req, res) {
    disciplina.get(req, res);
    //res.render('cadDisciplina');
});

app.post('/Disciplina', function(req, res) {
    disciplina.post(req, res);
});

app.get('/Turma', function(req, res) {
    turma.get(req, res);
    //res.render('cadTurma');
});
app.post('/Turma', function(req, res) {
    turma.post(req, res);
    //res.render('cadTurma');
});

app.get('/Professor', function(req, res) {
    professor.get(req, res);
    //res.render('cadProf');
});    

app.post('/Professor', function(req, res) {
    professor.post(req, res);
});

app.listen(8081, function(){
    console.log('Conectado na porta 8081');
});