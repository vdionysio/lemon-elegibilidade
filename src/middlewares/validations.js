const propsSchema = require('../schemas/propsSchema');

const validatesPropsIntegrity = (req, _res, next) => {
  const error = propsSchema.validate(req.body);
  if (error) return next(error);

  return next();
};

module.exports = {
  validatesPropsIntegrity,
};
