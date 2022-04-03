require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const { error } = require('./middlewares');

const app = express();

app.use(express.json());

app.use('/eligibility', routes.eligibility);

app.get('/', (req, res) => {
  res.send('Lemon energia API');
});
app.use(error);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
