const {
  props,
  docNumber,
  connectionType,
  consumptionClass,
} = require('../schemas');

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

const validateConnectionType = (req, _res, next) => {
  const error = connectionType.validate(req.body);
  if (error) return next(error);

  return next();
};

const validateConsumptionClass = (req, _res, next) => {
  const error = consumptionClass.validate(req.body);
  if (error) return next(error);

  return next();
};

module.exports = {
  validatePropsIntegrity,
  validateDocNumber,
  validateConnectionType,
  validateConsumptionClass,
};
