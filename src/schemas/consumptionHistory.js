const { generateSchemaError } = require('../utils');

const checkSize = (array) => {
  if (array.length >= 3 && array.length <= 12) return true;
  return false;
};

const checkItemsType = (array) => array.every((item) => Number.isInteger(item));

const checkItemsRange = (array) => array.every((item) => (item >= 0 && item <= 9999));

const validate = (body) => {
  const { historicoDeConsumo } = body;

  if (!Array.isArray(historicoDeConsumo)) {
    return generateSchemaError('"historicoDeConsumo" must be an array');
  }

  if (!checkSize(historicoDeConsumo)) {
    return generateSchemaError('"historicoDeConsumo" must have length >= 3 and <= 12');
  }

  if (!checkItemsType(historicoDeConsumo)) {
    return generateSchemaError('"historicoDeConsumo" must have only integer items');
  }

  if (!checkItemsRange(historicoDeConsumo)) {
    return generateSchemaError('"historicoDeConsumo" items must be in the range 0 - 9999');
  }

  return null;
};

module.exports = {
  validate,
};
