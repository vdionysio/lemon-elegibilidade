const eligibility = require('./eligibility');

const generateSchemaError = (message) => {
  const newError = new Error(message);
  newError.fromSchema = true;

  return newError;
};

module.exports = {
  generateSchemaError,
  eligibility,
};
