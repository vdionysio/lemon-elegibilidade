const generateSchemaError = (message) => {
  const newError = new Error(message);
  newError.fromSchema = true;

  return newError;
};

module.exports = {
  generateSchemaError,
};
