const { tiposDeConexao, classesDeConsumo, modalidadesTarifarias } = require("../../../src/utils/types");

const requiredProps = {
  numeroDoDocumento: 0,
  tipoDeConexao: 0,
  classeDeConsumo: 0,
  modalidadeTarifaria: 0,
  historicoDeConsumo: 0,
};

const missingRequiredProps = {
  numeroDoDocumento: 0,
  tipoDeConexao: 0,
  classeDeConsumo: 0,
  modalidadeTarifaria: 0,
}

const extraProps = {
  numeroDoDocumento: 0,
  tipoDeConexao: 0,
  classeDeConsumo: 0,
  modalidadeTarifaria: 0,
  historicoDeConsumo: 0,
  propriedadeExtra: 0,
};

const validCnpj = {
  numeroDoDocumento: '87945143000154',
};

const validCpf = {
  numeroDoDocumento: '21554495008',
};

const invalidDocNumber = {
  numeroDoDocumento: '428776053',
};

const validConnectionType = {
  tipoDeConexao: tiposDeConexao[0],
};

const invalidConnectionType = {
  tipoDeConexao: 'invalid'
};

const validConsumptionClass = {
  classeDeConsumo: classesDeConsumo[0],
};

const invalidConsumptionClass = {
  classeDeConsumo: 'invalid',
};

const validTariffModality = {
  modalidadeTarifarias: modalidadesTarifarias[0],
};

const invalidTariffModality = {
  modalidadeTarifaria: 'invalid',
};

module.exports = {
  extraProps,
  requiredProps,
  missingRequiredProps,
  validCnpj,
  validCpf,
  invalidDocNumber,
  validConnectionType,
  invalidConnectionType,
  validConsumptionClass,
  invalidConsumptionClass,
  validTariffModality,
  invalidTariffModality,
};
