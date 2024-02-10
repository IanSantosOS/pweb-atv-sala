const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const HOST = 'http://localhost';
const PORT = 3333;

const accounts = [
  { user: 'leo', pass: '1234' },
  { user: 'kenji', pass: '4567' },
  { user: 'rubens', pass: '7890' },
  { user: 'wladia', pass: '1A2B3C' }
]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (_req, res) => res.render('index'));

app.get('/login', (_req, res) => res.render('login'));

app.post('/login', ({ body }, res) => {
  if (accounts.some(({ user, pass }) => user === body.user && pass === body.pass)) {
    res.render('loginEfetuado');
  } else {
    res.render('loginFalhou');
  }
});

app.listen(PORT, () => console.log(`\n\x1b[43;1m Funcionou!!! \x1b[0m Servidor está rodando no \x1b[4m${HOST}:${PORT}\x1b[0m\n`));
