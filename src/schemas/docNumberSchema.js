const { generateSchemaError } = require('../utils');
const { cpf, cnpj } = require('../utils/types');

const validate = (body) => {
  const { numeroDoDocumento } = body;
  const isValidCpf = cpf.pattern.test(numeroDoDocumento);
  const isValidCnpj = cnpj.pattern.test(numeroDoDocumento);

  if (!isValidCnpj && !isValidCpf) {
    return generateSchemaError('"numeroDoDocumento" is invalid');
  }

  return null;
};

module.exports = {
  validate,
};
