const express = require('express')
const app = express()
const port = 3001;

app.use(express.json());

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
 
  connection.query('SELECT comentario.comentario, comentario.registro, usuario.nick FROM comentario JOIN usuario ON usuario.iduser = comentario.iduser;', function (error, results, fields) {
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

/*
app.get('/usuarios', (req, res) => {
    
    res.send('<h1> Está é a página de usuários</h1>')
    
  })

app.post('/usuarios', (req, res) => {

  const nome = req.body.nome;
  const email = req.body.email;

  const query = `
    INSERT INTO usuarios 
    (nome, email) 
    VALUES ("${nome}", "${email}")`;
   
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
})
*/

app.listen(port, () => {
  console.log(`A API está rodando em localhost:${port}`)
})