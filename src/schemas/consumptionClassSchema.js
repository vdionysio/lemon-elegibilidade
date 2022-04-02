const { generateSchemaError } = require('../utils');
const { classesDeConsumo } = require('../utils/types');

const validate = (body) => {
  const { classeDeConsumo } = body;
  const isValidConsumptionClass = classesDeConsumo.includes(classeDeConsumo);

  if (!isValidConsumptionClass) {
    return generateSchemaError('"classeDeConsumo" must be one of'
    + '["residencial","industrial","comercial","rural","poderPublico" ]');
  }

  return null;
};

module.exports = {
  validate,
};
