const { generateSchemaError } = require('../utils');
const { requiredKeys } = require('../utils/types');

const validate = (body) => {
  const bodyKeys = Object.keys(body);
  const firstMissingKey = requiredKeys
    .find((required) => !bodyKeys.includes(required));

  if (firstMissingKey) {
    return generateSchemaError(`"${firstMissingKey}" is required`);
  }

  const firstExtraKey = bodyKeys
    .find((bodyKey) => !requiredKeys.includes(bodyKey));

  if (firstExtraKey) {
    return generateSchemaError(`"${firstExtraKey}" is not allowed`);
  }

  return null;
};

module.exports = {
  validate,
};
