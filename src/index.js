require('dotenv').config();

const express = require('express');
const path = require('path');
const routes = require('./routes');
const { error } = require('./middlewares');

const app = express();

app.use(express.json());

app.use('/eligibility', routes.eligibility);

app.get('/', (req, res) => {
  res.send('Lemon energia API');
});

app.get('/doc', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use(error);

app.listen(5000, () => {
  console.log('Escutando na porta 5000');
});

module.exports = app;
