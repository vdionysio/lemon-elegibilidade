require('dotenv').config();

const express = require('express');
const { validator } = require('./middlewares');
const { props } = require('./schemas');

const app = express();

app.use(express.json());

app.get('/test', validator(props));

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
