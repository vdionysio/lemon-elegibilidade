const { requiredKeys } = require('../utils/types');

const validate = (body) => {
  const bodyKeys = Object.keys(body);
  const firstMissingKey = requiredKeys
    .find((required) => !bodyKeys.includes(required));

  if (firstMissingKey) {
    const error = new Error(`"${firstMissingKey}" is required`);
    return error;
  }

  const firstExtraKey = bodyKeys
    .find((bodyKey) => !requiredKeys.includes(bodyKey));

  if (firstExtraKey) {
    const error = new Error(`"${firstExtraKey}" is not allowed`);
    return error;
  }

  return null;
};

module.exports = {
  validate,
};
