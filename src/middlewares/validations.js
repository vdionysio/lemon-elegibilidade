const { props, docNumber } = require('../schemas');

const validatePropsIntegrity = (req, _res, next) => {
  const error = props.validate(req.body);
  if (error) return next(error);

  return next();
};

const validateDocNumber = (req, _res, next) => {
  const error = docNumber.validate(req.body);
  if (error) return next(error);

  return next();
};

module.exports = {
  validatePropsIntegrity,
  validateDocNumber,
};
