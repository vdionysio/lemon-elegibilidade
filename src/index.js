require('dotenv').config();

const express = require('express');
const { error } = require('./middlewares');

const app = express();

app.use(express.json());

app.use(error);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
