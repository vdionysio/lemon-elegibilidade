const { generateSchemaError } = require('../utils');
const { tiposDeConexao } = require('../utils/types');

const validate = (body) => {
  const { tipoDeConexao } = body;
  const isValidConnectionType = tiposDeConexao.includes(tipoDeConexao);

  if (!isValidConnectionType) {
    return generateSchemaError('"tipoDeConexao" is invalid');
  }

  return null;
};

module.exports = {
  validate,
};
