const { generateSchemaError } = require('../utils');
const { tiposDeConexao } = require('../utils/types');

const validate = (body) => {
  const { tipoDeConexao } = body;
  const isValidConnectionType = tiposDeConexao.includes(tipoDeConexao);

  if (!isValidConnectionType) {
    return generateSchemaError('"tipoDeConexao" must be one of ["monofasico", "bifasico", "trifasico"]');
  }

  return null;
};

module.exports = {
  validate,
};
