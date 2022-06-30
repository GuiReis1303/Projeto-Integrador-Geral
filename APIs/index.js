const express = require('express')
const app = express()
const port = 3001;

app.use(express.json());

app.listen(port, () => {
  console.log(`A API está rodando em localhost:${port}`)
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'guilherme',
  password : '1234',
  database : 'stationclass',
  port: 3306
});

app.get('/', (req, res) => {
 
  connection.query('SELECT * FROM user;', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  
})

app.get('/AulaM', (req, res) => {
 
  connection.query('SELECT * FROM aula;', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  
})

app.get('/AulaMComentarios', (req, res) => {
 
  connection.query('SELECT comentario.comentario, comentario.registro, comentario.criacao, usuario.nick FROM comentario JOIN usuario ON usuario.iduser = comentario.iduser;', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  
})

app.get('/CursoM', (req, res) => {
 
  connection.query('SELECT * FROM curso;', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  
})

app.get('/CursoModulos', (req, res) => {
 
  connection.query('SELECT * FROM modulos;', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  
})

app.post('/Usuario', (req, res) => {
  const nick = req.body.nick;
  const email = req.body.email;
  const senha = req.body.senha;
  const query = `INSERT INTO usuario (nick, email, senha) VALUES ('${nick}', '${email}', '${senha}');`
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  
})

app.post('/Verifica', (req, res) => {
  const nick = req.body.nick;
  const senha = req.body.senha;
  const query = `SELECT nick, senha, iduser FROM usuario WHERE nick='${nick}' and senha='${senha}';`
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  
})


app.post('/curtidaAula', (req, res) => {
  const idaula = req.body.idaula;
  const query = `SELECT count(*) AS curtidas FROM curtida_aula WHERE idaula='${idaula}';`
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  
})

app.post('/userCurtidaAula', (req, res) => {
  const idaula = req.body.idaula;
  const iduser = req.body.iduser;
  const query = `SELECT * FROM curtida_aula WHERE idaula='${idaula}' AND iduser='${iduser}'`
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  
})

app.post('/userCurtidaAulaAdd', (req, res) => {
  const idaula = req.body.idaula;
  const iduser = req.body.iduser;
  const query = `INSERT INTO curtida_aula (idaula, iduser) VALUES ('${idaula}', '${iduser}');`
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  
})

app.get('/Comunidade', (req, res) => {
 
  connection.query('SELECT comunidade.idcomunidade, comunidade.titulo, comunidade.comentario, comunidade.iduser, comunidade.descricao, comunidade.criacao, usuario.nick FROM comunidade JOIN usuario ON usuario.iduser = comunidade.iduser;', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  
})

app.post('/CriarPost', (req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  const comentario = req.body.comentario;
  const iduser = req.body.iduser;
 
  const query = `INSERT INTO comunidade (titulo, comentario, iduser, descricao) VALUES ('${titulo}', '${comentario}', '${iduser}', '${descricao}');`
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  
})

app.delete('/DeletaPost/:idcomunidade', (req, res) => {
  const idcomunidade = req.params.idcomunidade;
 
  const query = `DELETE FROM comunidade WHERE idcomunidade=${idcomunidade};`
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
  
})

