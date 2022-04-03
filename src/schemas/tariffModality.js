const { generateSchemaError } = require('../utils');
const { modalidadesTarifarias } = require('../utils/types');

const validate = (body) => {
  const { modalidadeTarifaria } = body;
  const isValidConsumptionClass = modalidadesTarifarias.includes(modalidadeTarifaria);

  if (!isValidConsumptionClass) {
    return generateSchemaError('"modalidadeTarifaria" must be one of'
    + '["azul", "branca", "verde", "convencional"]');
  }

  return null;
};

module.exports = {
  validate,
};
