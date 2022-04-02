const Joi = require('joi');

module.exports = Joi.object().keys({
  numeroDoDocumento: Joi.required(),
  tipoDeConexao: Joi.required(),
  classeDeConsumo: Joi.required(),
  modalidadeTarifaria: Joi.required(),
  historicoDeConsumo: Joi.required(),
});
