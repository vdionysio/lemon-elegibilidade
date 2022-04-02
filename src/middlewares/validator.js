const validator = (schema) => {
  console.log('validator');
  return (req, _res, next) => {
    const error = schema.validate(req.body);
    if (error) return next(error);

    return next();
  };
};

module.exports = validator;
